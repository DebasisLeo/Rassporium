import React, { useEffect, useState } from "react";
// import { getUserHistory, clearUserHistory } from "../api;
import HistoryItem from "../Components/HistoryItem";

const HistoryPage = () => {
    const userId = 1; 

    const [history, setHistory] = useState([]);

    useEffect(() => {
        fetchHistory();
    }, []);

    const fetchHistory = async () => {
        const data = await getUserHistory(userId);
        setHistory(data);
    };

    const handleClear = async () => {
        await clearUserHistory(userId);
        setHistory([]); // Clear UI instantly
    };

    return (
        <div className="container">
            <h2>User Activity History</h2>

            {history.length === 0 ? (
                <p>No history found.</p>
            ) : (
                history.map((item) => (
                    <HistoryItem key={item.id} item={item} />
                ))
            )}

            <button className="clear-btn" onClick={handleClear}>
                Clear History
            </button>
        </div>
    );
};

export default HistoryPage;
