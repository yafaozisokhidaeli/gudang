require('dotenv').config()
const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const mysql = require('mysql');


app.use(express.json())
app.use(cors())
app.use(morgan('dev'))


// Konfigurasi koneksi database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'inventory_db'
});

// Membuka koneksi ke database
db.connect((err) => {
    if (err) {
        console.error('Error koneksi ke database:', err);
    } else {
        console.log('Terhubung ke database');
    }
});

// Port server di jalankan
app.listen(8080, () => {
    console.log(`Server berjalan di port http://localhost:8080`)
})