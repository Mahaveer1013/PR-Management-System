import jwt from 'jsonwebtoken'
import { generateAccessToken } from '../controllers/auth.js';

const authenticateToken = (req, res, next) => {
  const accessToken = req.cookies.accessToken;

  if (!accessToken) {
    if (renewToken(req, res)) {
      next()
    }
  }

  jwt.verify(accessToken, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.json({ valid: false, message: "Invalid Token" });
    req.user = user;
    next();
  });
};

const renewToken = (req,res) => {
  const refreshToken = req.cookies.refreshToken;
  let renewed = false;

  if (!refreshToken) return res.status(401).json({ message: 'refresh Token not found' })
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) return res.json({ valid: false, message: "Invalid Token" });
    const myData = {
      id: user.id,
      username: user.login,
      name: user.name
    }
    const accessToken = generateAccessToken(myData)
    res.cookie('accessToken', accessToken, {
      httpOnly: true,
      maxAge: 3600000,
      //secure: false, // Set 'secure' to true in production (requires HTTPS)
      //sameSite: 'none', // Set 'sameSite' to 'none' for cross-site cookies
    });
    req.user = user;
    renewed = true;
  })

  return renewed;

}

export default authenticateToken
