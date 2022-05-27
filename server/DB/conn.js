const mongoose = require("mongoose")

//////////////////Data Base

const DB = process.env.DATABASE



mongoose.connect(DB);
mongoose.connection.on("connected", () => console.log("mongoose connected"));
mongoose.connection.on("error", (error) => console.log(error));


