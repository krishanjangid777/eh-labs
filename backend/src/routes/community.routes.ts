import { Router } from "express";
import { getAllCommunities, getCommunityById, createCommunity, addCommunityDetails, updateCommunityDetails, addCommunityAvatar, updateCommunityAvatar, deleteCommunity } from "../controllers/community.controller";

const router = Router()

router.route('').get(getAllCommunities)
router.route('/:id').get(getCommunityById)
router.route('').post(createCommunity)
router.route('/:id').post(addCommunityDetails)
router.route('/:id').put(updateCommunityDetails)
router.route('/:id/add-avatar').post(addCommunityAvatar)
router.route('/:id/change-avatar').put(updateCommunityAvatar)
router.route('/:id').delete(deleteCommunity)

export default router;