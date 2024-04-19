import express from 'express';
const router = express.Router();

// Controllers
import { register, login, getUser, purchaseOrder, updateOrder, getPurchases } from '../controllers/authController.js';
import { createPreference, processPaymentMercadoPago, processPaymentPaypal } from '../controllers/paymentsController.js';
import { newsletter_suscription } from '../controllers/suscriptionController.js';

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

// Purchase orders
router.post("/purchase-orders", validateAuthorization, purchaseOrder);

// Get Purchases
router.get("/purchases-user", validateAuthorization, getPurchases);

// Create Preference Mercado Pago
router.post("/mercado_pago/create_preference", validateAuthorization, createPreference);

// Verify Payment Mercado Pago
router.post("/mercado_pago/process_payment", validateAuthorization, processPaymentMercadoPago);

// Verify Payment Paypal
router.post("/paypal/process_payment", validateAuthorization, processPaymentPaypal);

// Newsletter Suscription
router.post("/newsletter_suscription", newsletter_suscription)

export default router;