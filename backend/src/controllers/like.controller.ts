import { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler";

const getAllLikes = asyncHandler(async (req:Request, res:Response) => {})

const getAllLikesForSpecificPost = asyncHandler(async (req:Request, res:Response) => {})

const addLike = asyncHandler(async (req:Request, res:Response) => {})

const removeLike = asyncHandler(async (req:Request, res:Response) => {})

export {
    getAllLikes,
    getAllLikesForSpecificPost,
    addLike,
    removeLike
}