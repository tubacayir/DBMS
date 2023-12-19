import express from "express";
import * as deleteController from "../controllers/deleteController.js";

const router = express.Router();
router.route("/productDeleteTry").post(deleteController.deleteProduct);

export default router; 