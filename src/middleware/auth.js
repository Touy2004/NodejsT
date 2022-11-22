import jwt from "jsonwebtoken"
/* Importing the bcrypt library. */
import bcrypt from "bcryptjs"
import { SECRET_KEY, SAL_I } from "./config.js"
import connected from "./db.js"
import { SELECT_TOKEN } from "../model/user.js"

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

export const auth = (req, res, next) => {
    const token = req.headers['token']
    if (!token) return res.json({ msg: "no found token" })
    const data = verifyToken(token)
    const values = data.id
    console.log(values);
    connected.query(SELECT_TOKEN, [values], (err, result) => {
        if (err) throw err
        if (!result) return res.json(result);
        next()
    })
}

export const verifyToken = (token) => {
    const decodeToken = jwt.verify(token, SECRET_KEY, (err, decode) => {
        return decode
    })
    return decodeToken
}