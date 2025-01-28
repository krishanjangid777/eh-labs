import { asyncHandler } from "../utils/asyncHandler";
import { Request, Response } from "express";

const getAllUsers = asyncHandler(async (req:Request, res:Response)=>{})

const getUserById = asyncHandler(async (req:Request, res:Response)=>{})

const changeCurrentPassword = asyncHandler(async (req:Request, res:Response)=>{})

const updateUserDetails = asyncHandler(async (req:Request, res:Response)=>{})

const addUserDetails = asyncHandler(async (req:Request, res:Response)=>{})

const addProfileAvatar = asyncHandler(async (req:Request, res:Response)=>{})

const updateProfileAvatar = asyncHandler(async (req:Request, res:Response)=>{})

const deleteUser = asyncHandler(async (req:Request, res:Response)=>{})

export {
    getAllUsers,
    getUserById,
    updateUserDetails,
    addProfileAvatar,
    updateProfileAvatar,
    deleteUser,
    changeCurrentPassword,
    addUserDetails
}