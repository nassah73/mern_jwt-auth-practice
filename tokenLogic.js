require('dotenv').config(); 
const { sign } = require('jsonwebtoken');


const createAccessToken = (user_id) => {
    return sign({ id: user_id }, process.env.ACCESS_TOKEN, { expiresIn: '15m' });
};


const createRefreshToken = (user_id) => {
    return sign({ id: user_id }, process.env.REFRESH_TOKEN, { expiresIn: '7d' });
};


module.exports = { createAccessToken, createRefreshToken };