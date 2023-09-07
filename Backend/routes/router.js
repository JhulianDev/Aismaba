import express from 'express';
const router = express.Router();

// Controllers
import { register, login, getUser } from '../controllers/authController.js';

// Middlewares
import { validateAuthorization } from '../middlewares/authMiddleware.js';

// Main path
router.get("/api/v1", (req, res) => {
  res.json("Welcome to Aismaba! This API is up and running.")
})

// Register and Login
router.post("/api/v1/sign-up", register);
router.post("/api/v1/login", login);

// Get User
router.get("/api/v1/users", validateAuthorization, getUser);


export default router;