const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"));

mongoose.connection.on("error", err => {
    console.log(`MongoDB connection error: ${err.message}`)
});

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`Server Listening on http://localhost:${port}`)
});

app.use("/user", require("./Routes/userRoutes"));
app.use("/product", require("./Routes/productRoute"));
app.use("/order", require("./Routes/orderRoute"));