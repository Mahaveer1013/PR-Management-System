import express from "express";
import { getPrData, getRepoData } from "../controllers/prData.js";

const router = express.Router();

router.get('/prData',getPrData);

router.get('/repoData', getRepoData);

export default router