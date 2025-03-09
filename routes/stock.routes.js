const router = require('express').Router();
// const { verifyToken } = require('../middlewares/verifyToken');
const { getStocks } = require('../handlers/stock.handler');

// router.get('/', verifyToken, getStocks);
router.get('/', getStocks); // 暂时移除中间件

module.exports = router;