"use strict";
require('dotenv').config();
module.exports = {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: 'TELZIR',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    dialectOptions: {
        timezone: 'Z',
    },
    logging: false,
};
//# sourceMappingURL=database.js.map