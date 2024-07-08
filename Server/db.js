const mongoose = require("mongoose");
const connectDb = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/Book').then((data) => {
            console.log(`Database Connected with ${data.connection.host}`);
        })
    }
    catch (error) {
        console.log(error.message);
        setTimeout(connectDb, 5000)
    }
}

module.exports = connectDb;