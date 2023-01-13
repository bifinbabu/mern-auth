const mongoose = require("mongoose")

module.exports = () => {
    const connectionParams = {useNewUrlParser: true, useUnifiedTopology: true}
    mongoose.set('strictQuery', true);
    const db = "mongodb://localhost:27017/"
    try {
        mongoose.connect(process.env.DB, connectionParams)
        console.log("Connected to database", process.env.DB);
    } catch (error) {
        console.log("db connection error is", error);
    }
}