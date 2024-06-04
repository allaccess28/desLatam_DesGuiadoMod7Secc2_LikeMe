import express from "express";
import { home, addPost, getPosts, updateLike, deletePost } from "../controller/controller.js";
const router = express.Router();

router.get("/", home)

router.post("/post", addPost);
router.get("/posts", getPosts);
router.put("/post", updateLike);
router.delete("/post", deletePost);
export default router