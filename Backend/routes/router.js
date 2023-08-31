import express from 'express';
const router = express.Router();

// Main path
router.get("/api/v1", (req, res) => {
  res.json("Welcome to Aismaba! This API is up and running.")
})

// Login and Register
router.get("/api/v1/login", (req, res) => {
  res.json("Welcome to Login!")
})

router.get("/api/v1/register", (req, res) => {
  res.json("Welcome to Register!")
})


export default router;