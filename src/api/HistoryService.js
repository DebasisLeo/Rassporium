import config from "../config";

export const getUserHistory = async (userId) => {
    const response = await fetch(`${config.API_URL}/history/${userId}`);
    return response.json();
};

export const clearUserHistory = async (userId) => {
    const response = await fetch(`${config.API_URL}/history/clear/${userId}`, {
        method: "DELETE"
    });
    return response.json();
};
