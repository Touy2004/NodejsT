import { ADD, UPDATE, DELETE, CREATE_TABLE } from "../model/product.js";
import connected from "../middleware/db.js"
import UploadImage from "../middleware/cloudinary.js";

export const createTableProduct = (req, res) => {
    try {
        connected.query(CREATE_TABLE, function(err, result) {
            if (err) throw err
            return res.json({ msg: "create table products successful" })
        })
    } catch (error) {
        console.log('error' + error)
    }
}

export const addProduct = async(req, res) => {
    let { name, price, ditails } = req.body
    const image = await UploadImage(req.body.image)

    connected.query(ADD, [
        [
            [name, price, ditails, image]
        ]
    ], (err, result) => {
        if (err) throw err
        return res.json({
            msg: "Your Product is added to your database"
        })
    })
}