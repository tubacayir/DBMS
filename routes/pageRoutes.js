import express from "express";
import * as pageController from "../controllers/pageController.js";
import * as shoeController from "../controllers/shoeController.js";
import * as orderController from "../controllers/orderController.js";
import * as deleteController from "../controllers/deleteController.js"
import * as getCustomersController from "../controllers/getCustomersController.js"

const router = express.Router();
router.route("/").get( shoeController.getProducts);
router.route("/category/:ct").get( shoeController.getCategories);
router.route("/categoryAdmin/:ct").get( shoeController.getCategoriesForAdmin);
router.route("/login").get( pageController.getLoginPage);  
router.route("/register").get(pageController.getRegisterPage);
router.route("/admin").get(shoeController.getProductsForAdmin);
router.route("/order/:prdct").get(pageController.getOrderPage);
router.route("/productDelete").get(pageController.getDeletePage);
router.route("/updateProduct").get(pageController.getUpdatePage);
router.route("/getCustomers").get(getCustomersController.getCustomers);

export default router; 