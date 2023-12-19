import express from "express";
import * as registerController from "../controllers/registerController.js";

const router = express.Router();
console.log("routes icindeyim");
router.route("/registerTry").post(registerController.RegisterUser);
export default router; 
