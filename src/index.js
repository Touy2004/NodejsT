import express from "express";
import { PORT } from "./middleware/config.js";
import './middleware/db.js'
import router from "./routter/routters.js";
import cors from "cors"
import bodyParser from "body-parser";



const app = express();


app.use(cors())
app.use(bodyParser.json({ extended: false, limit: '500mb' }))
app.use(bodyParser.urlencoded({ extended: false, limit: '5000mb', parameterLimit: 50000 }))


app.use('/api', router)
app.listen(PORT, () => {
    console.log(`sever running on port ${PORT}`)
})