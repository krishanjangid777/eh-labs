import { Router } from "express";
import { createPost, getAllPosts, getSinglePost, updatePost, deletePost } from "../controllers/post.controller";

const router = Router()

router.route('').post(createPost)
router.route('/posts').get(getAllPosts)
router.route('/post/:id').get(getSinglePost)
router.route('/post/:id').put(updatePost)
router.route('/post/:id').delete(deletePost)

export default router;