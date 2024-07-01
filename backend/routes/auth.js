import { Router } from 'express';
import { githubCallback, refreshToken } from '../controllers/auth.js';

const router = Router();

router.get('/github/callback', githubCallback);

router.post('/refreshToken', refreshToken);

export default router;
