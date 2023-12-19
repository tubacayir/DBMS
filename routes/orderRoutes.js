import express from "express";
import * as orderController from "../controllers/orderController.js";

const router = express.Router();
console.log("routeeeeeee")
router.route("/orderTry").post(orderController.giveOrders);

export default router; 