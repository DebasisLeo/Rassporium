const mysql = require("mysql2");
const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "your_db_name",
    connectionLimit: 10
});

module.exports = pool.promise();
