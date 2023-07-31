const mongoose = require('mongoose');
module.exports.connectDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost:27017/test', {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
    } catch (error) {
        console.log(error);
    }
}