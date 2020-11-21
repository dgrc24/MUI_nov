const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require("cors");

app.use(cors());
app.use(express.json());


const db = mysql.createConnection({
    hostname: 'localhost',
    user: 'root',
    password: 'danny2412',
    database: 'SIGTcobaej'
});



app.get('/', (req, res) => {
    res.send("hello world")
});
app.listen(3001, () => {
    console.log("running on port 3001")
});