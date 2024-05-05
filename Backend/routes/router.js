import express from 'express';
const router = express.Router();

// Controllers
import { register, login, getUser } from '../controllers/authController.js';
import { createOrder, getOrdersCompleted } from '../controllers/ordersController.js';
import { getSuscriptions, newsletter_suscription } from '../controllers/suscriptionController.js';
import { createPreference, processPaymentMercadoPago, processPaymentPaypal } from '../controllers/paymentsController.js';

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

// Create purchase orders
router.post("/create-order", validateAuthorization, createOrder);

// Get Purchases
router.get("/orders-completed-user", validateAuthorization, getOrdersCompleted);

// Create Preference Mercado Pago
router.post("/mercado_pago/create_preference", validateAuthorization, createPreference);

// Verify Payment Mercado Pago
router.post("/mercado_pago/process_payment", validateAuthorization, processPaymentMercadoPago);

// Verify Payment Paypal
router.post("/paypal/process_payment", validateAuthorization, processPaymentPaypal);

// Newsletter Suscription
router.post("/newsletter_suscription", newsletter_suscription)
router.get("/get_newsletter_suscription", validateAuthorization, getSuscriptions)

export default router;