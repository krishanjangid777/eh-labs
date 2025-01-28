import { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler";

const getAllCommunityMembers = asyncHandler(async (req:Request, res:Response) => {})

const getCommunityMemberById = asyncHandler(async (req:Request, res:Response) => {})

const addUserInCommunity = asyncHandler(async (req:Request, res:Response) => {})

const removeUserFromCommunity = asyncHandler(async (req:Request, res:Response) => {})

export {
    getAllCommunityMembers,
    getCommunityMemberById,
    addUserInCommunity,
    removeUserFromCommunity
}