import express from "express";

const router = express.Router();

router.get('/', (req, res) => {
  console.log(req.user);
  res.json(req.user);
});

export default router;