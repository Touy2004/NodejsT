import dotenv from "dotenv"

dotenv.config();

export const PORT = process.env.PORT
export const SECRET_KEY = process.env.SECRET_KEY
export const SAL_I = process.env.SAL_I

// Cloudinary
export const cloud_name = process.env.CLOUDINARY_NAME
export const api_key = process.env.CLOUDINARY_API_KEY
export const api_secret_key = process.env.CLOUDINARY_API_SECRET_KEY

//database
export const database_url = process.env.DATABASE_URL