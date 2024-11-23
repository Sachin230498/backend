import express from "express";
import { GetData,Data,PostUser } from "../controller/UserController.js";

const router = express.Router();


// Routes


router.get("/get", GetData)


router.get("/getData", Data)

router.post("/postuser",PostUser )





export default router;