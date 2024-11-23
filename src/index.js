import express from "express";
import Connection from "./config/ConnectDB.js";
import router from "./routes/userroutes.js";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();


const app = express();

app.use(bodyParser.json())

Connection(process.env.Mongo_url);

app.get("/", (req,res)=>{
   res.send("started")
})


app.use("/user", router);

// Server
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
