import React from "react";

const HistoryItem = ({ item }) => {
    return (
        <div className="history-card">
            <h4>{item.action_type}</h4>
            <p><strong>Title/Item:</strong> {item.item_name || "N/A"}</p>
            <p><strong>Date:</strong> {new Date(item.timestamp).toLocaleDateString()}</p>
            <p><strong>Time:</strong> {new Date(item.timestamp).toLocaleTimeString()}</p>
            {item.details && <p><strong>Details:</strong> {item.details}</p>}
        </div>
    );
};

export default HistoryItem;
