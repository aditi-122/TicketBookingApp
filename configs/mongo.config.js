const mongoose = require("mongoose");
const MONGO_URL = process.env.MONGO_URL
const connectTODb = async () => {
    try {
        await mongoose.connect(MONGO_URL);
    } catch (err) {
        console.log(err)
    }
}
module.exports = connectTODb;