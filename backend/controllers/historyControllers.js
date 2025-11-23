exports.createHistory = async (req, res) => {
    const { user_id, action_type, item_id, item_name, details } = req.body;

    try {
        const [result] = await db.query(
            `INSERT INTO user_history (user_id, action_type, item_id, item_name, details)
             VALUES (?, ?, ?, ?, ?)`,
            [user_id, action_type, item_id, item_name, details]
        );

        res.json({ message: "History log created", id: result.insertId });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Database error" });
    }
};


exports.getHistory = async (req, res) => {
    const user_id = req.params.user_id;

    try {
        const [rows] = await db.query(
            `SELECT * FROM user_history 
             WHERE user_id = ? 
             ORDER BY timestamp DESC`,
            [user_id]
        );

        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: " Occured Database error" });
    }
};


exports.clearHistory = async (req, res) => {
    const user_id = req.params.item_id;

    try {
        await db.query(`DELETE FROM user_history WHERE user_id = ?`, [user_id]);
        res.json({ message: "History cleared" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Occured Database error" });
    }
};

