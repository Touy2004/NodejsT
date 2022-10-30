import mysql from "mysql"

const connected = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "test3"
});
connected.connect(function(err, result) {
    if (err) throw err
    console.log("Mysql connected")
})

export default connected;