import { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler";

const getAllComments = asyncHandler(async (req:Request, res:Response) => {})

const getCommentById = asyncHandler(async (req:Request, res:Response) => {})

const addComment = asyncHandler(async (req:Request, res:Response) => {})

const updateComment = asyncHandler(async (req:Request, res:Response) => {})

const deleteComment = asyncHandler(async (req:Request, res:Response) => {})

export {
    getAllComments,
    getCommentById,
    addComment,
    updateComment,
    deleteComment
}