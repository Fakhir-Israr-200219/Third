const express = require("express");
const dbConnect = require("./Config/dbConnect");
const errorHandler = require("./Middleware/errorHandling");
const dotenv = require("dotenv").config();


dbConnect();
const app = express();
app.use(express.json());

app.use("/student",require("./Routes/student.route"));

app.use(errorHandler);
const port = process.env.PORT;
app.listen(port ,()=>{
    console.log(`app running on port ${port}`)
})

