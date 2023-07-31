const mongoose = require('mongoose');

const TransferSchema = new mongoose.Schema({
  blockNumber: String,
  transactionHash: String,
});

const Transfer = mongoose.model('Transfer', TransferSchema);
module.exports = Transfer;
