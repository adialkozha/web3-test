const router = require('express').Router();
const apiController = require('../controller/api');

router.post('/api/transfers', apiController.setTransfers)
router.get('/api/transfers', apiController.getTransfers)
module.exports = router;
