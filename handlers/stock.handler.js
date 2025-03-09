// handlers/stock.handler.js
const Stock = require('../models/stock.model');

exports.getStocks = async (req, res) => {
    try {
        const stocks = await Stock.getAll();
        
        // 返回原始数据 + 添加符号标识
        const formatted = stocks.map(item => ({
            name: item.name,
            price: item.price, // 保留原始 DECIMAL 类型
            change_percent: item.change_percent, // 保留两位小数
            is_positive: item.change_percent >= 0 // 添加正负标识
        }));

        res.json({ 
            success: true, 
            data: formatted 
        });
    } catch (error) {
        console.error("Error in getStocks:", error);
        res.status(500).json({ 
            success: false,
            message: '出错啦又, Error fetching stock data'
        });
    }
};

