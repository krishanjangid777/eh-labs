import {Router} from "express"
import { getAllUsers, getUserById, changeCurrentPassword, addUserDetails, updateUserDetails, addProfileAvatar, updateProfileAvatar, deleteUser } from "../controllers/user.controller"

const router = Router()

router.route('').get(getAllUsers)
router.route('/:id').get(getUserById)
router.route('/:id/change-password').put(changeCurrentPassword)
router.route('/:id').post(addUserDetails)
router.route('/:id').put(updateUserDetails)
router.route('/:id/add-avatar').post(addProfileAvatar)
router.route('/:id/change-avatar').put(updateProfileAvatar)
router.route('/:id').delete(deleteUser)

export default router;