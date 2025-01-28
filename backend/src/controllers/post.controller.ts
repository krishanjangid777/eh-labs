import { asyncHandler } from "../utils/asyncHandler";
import { Request, Response } from "express";

const createPost = asyncHandler(async (req:Request, res:Response) => {})

const getAllPosts = asyncHandler(async (req:Request, res:Response) => {})

const getSinglePost = asyncHandler(async (req:Request, res:Response) => {})

const updatePost = asyncHandler(async (req:Request, res:Response) => {})

const deletePost = asyncHandler(async (req:Request, res:Response) => {})

export {
    createPost,
    getAllPosts,
    getSinglePost,
    updatePost,
    deletePost
}