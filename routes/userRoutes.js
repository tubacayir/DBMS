import express from "express";
import * as userController from "../controllers/userController.js";
const router = express.Router();
router.route("/loginTry").post(userController.loginUser);
router.route("/employeeLoginTry").post(userController.loginEmployee);
export default router; 