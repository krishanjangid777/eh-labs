import { Router } from "express";
import { getAllLikes, getAllLikesForSpecificPost, addLike, removeLike } from "../controllers/like.controller";

const router = Router()

router.route('').get(getAllLikes)
router.route('/likes?postId=:postId').get(getAllLikesForSpecificPost)
router.route('').post(addLike)
router.route('').delete(removeLike)

export default router;