import express from 'express';
const router = express.Router();

// Controllers
import { register, login, getUser, purchaseOrder, updateOrder } from '../controllers/authController.js';

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
router.get("/api/v1/user", validateAuthorization, getUser);

// Purchase orders
router.post("/api/v1/purchase-orders", validateAuthorization, purchaseOrder);

// Update order
router.put("/api/v1/order/:id", validateAuthorization, updateOrder);

export default router;