import express from 'express';
const router = express.Router();

// Controllers
import { register, login, getUser, purchaseOrder, updateOrder, getPurchases, createPreference, verifyPaymentMP } from '../controllers/authController.js';

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

// Get Purchases
router.get("/api/v1/purchases-user", validateAuthorization, getPurchases);

// Create Preference Mercado Pago
router.post("/api/v1/mercado_pago/create_preference", validateAuthorization, createPreference);

// Verify Payment Mercado Pago
router.post("/api/v1/mercado_pago/verify_payment", validateAuthorization, verifyPaymentMP);

export default router;