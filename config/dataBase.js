
const mongoose = require('mongoose')

const connectDB = async () => {
    try {
    await mongoose.connect(process.env.DB_URI)
    console.log("data base connected");
} catch (err) {
    if (err) console.log('error',err);
}

}

module.exports = connectDB