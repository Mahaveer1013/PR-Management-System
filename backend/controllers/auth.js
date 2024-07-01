import axios from 'axios';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'


dotenv.config()

export const githubCallback = async (req, res) => {
  const code = req.query.code;
  const state = req.query.state;

  if (!code || !state) {
    return res.status(400).send('Missing code or state');
  }

  try {
    const tokenResponse = await axios.post(
      'https://github.com/login/oauth/access_token',
      {
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        code,
        state,
      },
      {
        headers: {
          Accept: 'application/json',
        },
      }
    );

    const gitAccessToken = tokenResponse.data.access_token;

    const userResponse = await axios.get('https://api.github.com/user', {
      headers: {
        Authorization: `Bearer ${gitAccessToken}`,
      },
    });

    const userData = userResponse.data;
    const myData = {
      id: userData.id,
      username: userData.login,
    }

    const accessToken = jwt.sign(myData, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.cookie('accessToken', accessToken, {
      httpOnly: true,
      //secure: false, // Set 'secure' to true in production (requires HTTPS)
      //sameSite: 'none', // Set 'sameSite' to 'none' for cross-site cookies
    });

    const refreshToken = generateRefreshToken(myData)
    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      //secure: false, // Set 'secure' to true in production (requires HTTPS)
      //sameSite: 'none', // Set 'sameSite' to 'none' for cross-site cookies
    });

    const frontendUrl = `http://localhost:3000`;
    res.redirect(frontendUrl);
  } catch (error) {
    console.error('Error during GitHub OAuth:', error);
    res.status(500).send('An error occurred during authentication');
  }
}

export const refreshToken = (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  
  if (!refreshToken) {
    return res.status(401).json({ message: 'Refresh token not found' });
  }
  
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Refresh token expired or invalid' });
    }
    
    const accessToken = generateAccessToken({ id: decoded.id, username: decoded.username });
    console.log(refreshToken);
    
      res.cookie('accessToken', accessToken, {
          httpOnly: true,
          //secure: true, // Set 'secure' to true in production (requires HTTPS)
          //sameSite: 'none', // Set 'sameSite' to 'none' for cross-site cookies
      });

      res.json({ accessToken });
  });
}

function generateAccessToken(payload) {
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '10s' });
}

function generateRefreshToken(payload) {
  return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '30d' });
}
