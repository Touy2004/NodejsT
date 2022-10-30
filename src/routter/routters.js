import express from "express"
import { createTableUser, registers, login } from "../controller/user.js"

const router = express.Router()


router.post("/user", createTableUser);
router.post("/user/register", registers);
router.post("/user/login", login)

export default router