import express from "express"
import { createTableProduct, addProduct } from "../controller/products.js";
import { createTableUser, registers, login } from "../controller/user.js"
import { auth } from "../middleware/auth.js";

const router = express.Router()


router.post("/user", createTableUser);
router.post("/user/register", registers);
router.post("/user/login", login)

router.post("/product", createTableProduct)
router.post("/product/addproduct", auth, addProduct)

export default router