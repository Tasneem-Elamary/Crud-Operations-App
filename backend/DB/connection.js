import mysql2 from 'mysql2'
const sql = mysql2.createConnection({
    user: "root",
    password: '',
    database: 'online-shop',
    host: '127.0.0.1',
    port:3308
})


export default sql
