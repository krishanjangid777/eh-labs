import {Router} from "express"
import { createPost, getAllEvents, getAllWebinars } from "../controllers/post.controller.js"
import {upload} from '../middlewares/multer.middleware.js'

const router = Router()

router.route('/submit').post(
    upload.fields([
        {
            name: "imageLink",
            maxCount: 1
        }
    ]), createPost
)
router.route('/all-events').get(getAllEvents)
router.route('/all-webinars').get(getAllWebinars)

export default router