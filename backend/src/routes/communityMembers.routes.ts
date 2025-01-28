import { Router } from "express";
import { getAllCommunityMembers, getCommunityMemberById, addUserInCommunity, removeUserFromCommunity } from "../controllers/communityMembers.controller";

const router = Router()

router.route('').get(getAllCommunityMembers)
router.route('/:id').get(getCommunityMemberById)
router.route('').post(addUserInCommunity)
router.route('/:id').delete(removeUserFromCommunity)

export default router;