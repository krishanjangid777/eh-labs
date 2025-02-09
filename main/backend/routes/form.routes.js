import {Router} from "express"
import { submitForm } from "../controllers/form.controller.js"

const router = Router()

router.route('/submit').post(submitForm)

export default router