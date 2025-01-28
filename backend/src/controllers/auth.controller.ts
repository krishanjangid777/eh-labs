import { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import prisma from "../middlewares/bcrypt.middleware";
import { ApiError } from "../utils/ApiError";
import { ApiResponse } from "../utils/ApiResponse";

interface registerValues{
    username: string;
    email: string;
    password: string;
}

const registerUser = asyncHandler(async (req:Request, res:Response) => {
    const { username, email, password }: registerValues = req.body;

    if ([username, email, password].some((field) => field.trim() === "")) {
        throw new ApiError(400, '❌ All fields are required !')
    }

    const existedUser = await prisma.user.findUnique({
        where: {
            email,
            username
        },
    })
    if (existedUser) {
        throw new ApiError(409, "❌ User with email or username already exists.")
    }

    try {
        const user = await prisma.user.create({
          data: {
            username,
            email,
            password, // The middleware will hash this automatically
          },
        });

        // const createdUser = await prisma.user.findUnique(user._id).select(
        //     "-password -refreshToken"
        // )
    
         return res.status(201).json(
            new ApiResponse(200, user, "✅ User registered Successfully")
         );
      } catch (error) {
        res.status(500).json({ error: "Failed to register user" });
      }
})

const loginUser = asyncHandler(async (req:Request, res:Response) => {})

const logoutUser = asyncHandler(async (req:Request, res:Response) => {})

const refreshAccessToken = asyncHandler(async (req:Request, res:Response) => {})

export {
    registerUser,
    loginUser,
    logoutUser,
    refreshAccessToken
}