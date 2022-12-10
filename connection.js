import mysql from "mysql2"
import env from "dotenv"


export const db = mysql.createConnection({
    host:"localhost",
    port:"8889",
    user:"sudhir2518",
    password:"Trumpetmajor@78",
    database:"csim"
})