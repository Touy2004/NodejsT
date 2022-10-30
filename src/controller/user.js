import { generateToken, comparePassword, generatePassword, } from "../middleware/auth.js"
import connected from "../middleware/db.js"
import { CREATE_TABLE, LOGIN, REGISTER, SELECT_PHONE } from "../model/user.js"


export const createTableUser = (req, res) => {
    try {
        connected.query(CREATE_TABLE, function(err, result) {
            if (err) throw err
            return res.json({ msg: "create table user successful" })
        })
    } catch (error) {
        console.log('error' + error)
    }
}

export const registers = async(req, res) => {

    try {
        let { firstName, lastName, phone, password } = req.body;
        if (!firstName) {
            return res.status(400).json({ msg: "Firstname is require" })
        }
        if (!lastName) {
            return res.status(400).json({ msg: "Lastname is require" })
        }
        if (!phone) {
            return res.status(400).json({ msg: "Phone is require" })
        }
        if (!password) {
            return res.status(400).json({ msg: "password is require" })
        }
        const passwordToken = await generatePassword(password)

        connected.query(SELECT_PHONE, phone, async(err, result) => {
            if (err) throw err
            if (result.legth > 0) {
                return res.json({ phone: "Phone is already" })
            }
            connected.query(REGISTER, [
                [
                    [firstName, lastName, phone, passwordToken]
                ]
            ], async(err, result) => {
                if (err) throw err
                const token = generateToken(result)

                return res.json({
                    msg: "Register is complete,"
                })
            })
        })

    } catch (error) {
        console.log('error' + error);
    }
}
export const login = (req, res) => {

    try {
        const { phone, password } = req.body;
        if (!phone) {
            return res.json({ msg: "phone is require" })

        }
        if (!password) {
            return res.status(400).json({ msg: "password is require" })
        }
        connected.query(LOGIN, phone, async(err, result) => {

            if (err) return res.json({ msg: "Invaild phone or password1" });
            if (result.legth === 0) {
                return res.json({ msg: "Invaild phone or password2" })
            };
            const checkpassword = await comparePassword(
                password,
                result[0].password
            )
            if (!checkpassword) {
                return res.json({ msg: "Invaild phone or password3" })
            }
            const token = generateToken(result)
            return res.json({ msg: "Login succesful", token })
        })

    } catch (error) {
        console.log('error' + error)
    }
}