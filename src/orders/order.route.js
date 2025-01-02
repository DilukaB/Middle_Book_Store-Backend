const express = require('express');
const router = express.Router();
const { createAOrder } = require('../orders/order.controller'); // Ensure the correct path to your controller file

// Create order endpoint
router.post("/", createAOrder);

module.exports = router;
