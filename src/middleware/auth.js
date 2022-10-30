import jwt from "jsonwebtoken"
/* Importing the bcrypt library. */
import bcrypt from "bcryptjs"
import { SECRET_KEY, SAL_I } from "./config.js"

export const generateToken = (data) => {
    return jwt.sign({ data }, SECRET_KEY, { expiresIn: "7d" })
}

export const generatePassword = async(password) => {
    /* Generating a salt. */
    const saltHash = await bcrypt.genSalt(parseInt(SAL_I))
    const hashPassword = await bcrypt.hash(password, saltHash)
    return hashPassword
}

export const comparePassword = async(loginPassword, password) => {
    return await bcrypt.compare(loginPassword, password)
}