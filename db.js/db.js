const mysql = require("mysql2");
const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "user_history",
    connectionLimit: 10
});

module.exports = pool.promise();





































// project-root/
// │
// ├── backend/
// │   ├── config/
// │   │   └── db.js
// │   ├── controllers/
// │   │   └── historyController.js
// │   ├── middleware/
// │   │   └── historyLogger.js
// │   ├── routes/
// │   │   └── historyRoutes.js
// │   ├── models/
// │   │   └── historyModel.js
// │   ├── server.js
// │   └── package.json
// │
// └── frontend/
//     ├── src/
//     │   ├── components/
//     │   │   └── HistoryList.js
//     │   ├── pages/
//     │   │   └── HistoryPage.js
//     │   ├── api/
//     │   │   └── historyApi.js
//     │   └── App.js
//     └── package.json
