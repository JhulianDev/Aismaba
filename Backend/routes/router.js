import express from 'express';
const router = express.Router();

// Controllers
import { register, login, getUser, purchaseOrder, updateOrder, getPurchases, createPreference, verifyPaymentMP, getDolarValue } from '../controllers/authController.js';

// Middlewares
import { validateAuthorization } from '../middlewares/authMiddleware.js';

// Main path
router.get("/", (req, res) => {
  res.json("Welcome to Aismaba! This API is up and running.")
})

// Register and Login
router.post("/sign-up", register);
router.post("/login", login);

// Get User
router.get("/user", validateAuthorization, getUser);

// Get Dolar value
router.get("/private", getDolarValue);

// Purchase orders
router.post("/purchase-orders", validateAuthorization, purchaseOrder);

// Update order
router.put("/order/:id", validateAuthorization, updateOrder);

// Get Purchases
router.get("/purchases-user", validateAuthorization, getPurchases);

// Create Preference Mercado Pago
router.post("/mercado_pago/create_preference", validateAuthorization, createPreference);

// Verify Payment Mercado Pago
router.post("/mercado_pago/verify_payment", validateAuthorization, verifyPaymentMP);

export default router;