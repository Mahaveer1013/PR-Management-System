import { Router } from 'express';
import { githubCallback, logout } from '../controllers/auth.js';

const router = Router();

router.get('/github/callback', githubCallback);

router.get('/logout', logout);

export default router;
