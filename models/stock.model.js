const db = require("../utils/db.utils");

const Stock = {
    getAll: () => {
        return new Promise((resolve, reject) => {
            db.query(`
                SELECT name, price, change_percent 
                FROM stocks 
                ORDER BY created_at DESC
                LIMIT 20
            `, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    }
};

module.exports = Stock;
