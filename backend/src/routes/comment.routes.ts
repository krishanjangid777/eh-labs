import { Router } from "express";
import { getAllComments, getCommentById, addComment, updateComment, deleteComment } from "../controllers/comment.controller";

const router = Router()

router.route('').get(getAllComments)
router.route('/:id').get(getCommentById)
router.route('').post(addComment)
router.route('/:id').put(updateComment)
router.route('/:id').delete(deleteComment)

export default router;