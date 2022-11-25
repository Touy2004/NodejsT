import mysql from "mysql"
import { database_url } from "./config.js";

const connected = mysql.createConnection(database_url);
connected.connect(function(err, result) {
    if (err) throw err
    console.log("Mysql connected")
})

export default connected;