const express = require("express");
const path = require("path")
const app = express();
const router = require("./routes/Book.route")
const cors = require("cors");
app.use('/upload', express.static('upload'))
app.use(cors({ origin: "http://localhost:4200", credentials: true }))
const PORT = 3000;
const connectDb = require("./db");
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }))
app.use("/books", router);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDb();
});
