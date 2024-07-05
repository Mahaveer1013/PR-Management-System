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
      name: userData.name
    }

    const accessToken = generateAccessToken(myData)
    res.cookie('accessToken', accessToken, {
      httpOnly: true,
      maxAge: 3600000,
      //secure: false, // Set 'secure' to true in production (requires HTTPS)
      //sameSite: 'none', // Set 'sameSite' to 'none' for cross-site cookies
    });

    const refreshToken = generateRefreshToken(myData)
    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      maxAge: 2592000000,
      //secure: false, // Set 'secure' to true in production (requires HTTPS)
      //sameSite: 'none', // Set 'sameSite' to 'none' for cross-site cookies
    });

    const frontendUrl = process.env.FRONTEND_URL;
    res.redirect(frontendUrl);
  } catch (error) {
    console.error('Error during GitHub OAuth:', error);
    res.status(500).send('An error occurred during authentication');
  }
}

export const logout = async (req, res) => {
  res.cookie('accessToken', null, {
    maxAge: -1,
    httpOnly: true,
  });
  res.cookie('refreshToken', null, {
    maxAge: -1,
    httpOnly: true,
  });
  console.log({ message: 'logout succesfull' });
  res.status(200).json({ message: 'logout succesfull' });
}

export function generateAccessToken(payload) {
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
}

function generateRefreshToken(payload) {
  return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '30d' });
}
