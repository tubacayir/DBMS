import express from "express";
import * as updateController from "../controllers/updateController.js";

const router = express.Router();
console.log("update routerdayım")
router.route("/updateProductTry").post(updateController.updateProduct);

export default router; 