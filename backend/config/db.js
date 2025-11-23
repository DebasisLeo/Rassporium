const mysql = require("mysql2");
require("dotenv").config();

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

module.exports = db;


const db = require("../config/db");

exports.insertHistory = (data, callback) => {
    const query = `INSERT INTO user_history (user_id, action_type, item_name, details)
                   VALUES (?, ?, ?, ?)`;

    db.query(
        query,
        [data.user_id, data.action_type, data.item_name, data.details],
        callback
    );
};

exports.getHistory = (user_id, callback) => {
    db.query("SELECT * FROM user_history WHERE user_id = ? ORDER BY timestamp DESC",
        [user_id],
        callback
    );
};

exports.clearHistory = (user_id, callback) => {
    db.query("DELETE FROM user_history WHERE user_id = ?", [user_id], callback);
};
