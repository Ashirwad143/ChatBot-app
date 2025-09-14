import {Router} from "express";
import {chatBot} from "../controllers/chatBot.js"
const router=Router();


router.post("/message",chatBot);
export default router;