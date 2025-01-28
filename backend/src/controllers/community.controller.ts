import { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler";

const getAllCommunities = asyncHandler(async (req:Request, res:Response) => {})

const getCommunityById = asyncHandler(async (req:Request, res:Response) => {})

const createCommunity = asyncHandler(async (req:Request, res:Response) => {})

const addCommunityDetails = asyncHandler(async (req:Request, res:Response) => {})

const updateCommunityDetails = asyncHandler(async (req:Request, res:Response) => {})

const addCommunityAvatar = asyncHandler(async (req:Request, res:Response)=>{})

const updateCommunityAvatar = asyncHandler(async (req:Request, res:Response)=>{})


const deleteCommunity = asyncHandler(async (req:Request, res:Response) => {})

export {
    getAllCommunities,
    getCommunityById,
    createCommunity,
    addCommunityDetails,
    updateCommunityDetails,
    addCommunityAvatar,
    updateCommunityAvatar,
    deleteCommunity
} 