const express = require('express');
const app = express();
const cors = require("cors");

//MiddleWare
app.use(express.json());
app.use(cors());

//routes //
//registering and loging
app.use("/auth", require("./routes/jwtAuth"));

//dashboard
app.use("/dashboard", require("./routes/dashboard"));

app.listen(5000,() => {

    console.log("server is running on port 5000");
});