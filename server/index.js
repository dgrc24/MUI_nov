const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require("cors");
const bodyParser = require('body-parser');



const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'danny2412',
    database: 'SIGTcobaej',
});

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/alumno/getInfo', (req, res) => {
    const sqlGet = "select * from datosac_Al inner join datosp_al";
    db.query(sqlGet, (err, result) => {
        res.send(result)
    })
});
app.post('/citas/crear', (req, res) => {
    const fecha = req.body.fecha
    const hora = req.body.hora
    const nombre_alumno = req.body.nombre_alumno
    const semestre = req.body.semestre
    const grupo = req.body.grupo
    const numCtrl = "14BE90872020"
    const sqlInsert = "insert into citas (fecha,hora,nombre_alumno,semestre,grupo,numCtrl) values(?,?,?,?,?,?)";
    db.query(sqlInsert, [fecha, hora, nombre_alumno, semestre, grupo, numCtrl], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send("Values Inserted")
            console.log(res)
        }
    })
});



app.listen(3001, () => {
    console.log('Servidor corriendo en el puerto 3001')
});