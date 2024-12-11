import e from "express";
import { createPostController, deletePostController, getAllPostController, updatePostController } from "../controllers/posts.controllers.js";

const router = e.Router();

router.get("/all", getAllPostController);
router.post("/post/add", createPostController);
router.delete("/post/remove/:id", deletePostController);
router.put("/post/update/:id", updatePostController);

export default router;