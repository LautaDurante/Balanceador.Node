import mysql from 'mysql2';
import express from 'express';

const port = 80;
const app = express();

const pool = mysql.createPool({
    host:'172.17.0.2',
    user:'root',
    password:'root1',
    database:'prueba',
}).promise();


app.get('/', async (req, res) => {
    const result = await pool.query('SELECT * FROM ALUMNOS');
    res.json({'web':1, 'result':result[0]});
});

app.listen(port, ()=>{console.log(`listening on port ${port}`);});