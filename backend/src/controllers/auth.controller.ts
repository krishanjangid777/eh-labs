import { Request, Response } from "express";
import { JwtPayload, verify } from "jsonwebtoken";
import { asyncHandler } from "../utils/asyncHandler";
import prisma from "../middlewares/bcrypt.middleware";
import { ApiError } from "../utils/ApiError";
import { ApiResponse } from "../utils/ApiResponse";
import { generateAccessToken, generateRefreshToken, verifyRefreshToken } from "../utils/jwt";

interface registerValues {
  username: string;
  email: string;
  password: string;
}

interface CustomJwtPayload extends JwtPayload {
    id: number; // Assuming 'id' is of type number, adjust if needed
  }

const registerUser = asyncHandler(async (req: Request, res: Response) => {  
  const { username, email, password }: registerValues = req.body;

  if ([username, email, password].some((field) => field.trim() === "")) {
    throw new ApiError(400, "❌ All fields are required !");
  }

  const existedUser = await prisma.user.findFirst({
    where: {
        OR: [
          { email },
          { username }
        ],
      },
  });
  if (existedUser) {
    throw new ApiError(409, "❌ User with email or username already exists.");
  }

  try {
    const user = await prisma.user.create({
      data: {
        username,
        email,
        password, // The middleware will hash this automatically
      },
    });

    const createdUser = await prisma.user.findUnique({
        where: { id: user.id },
        select: {
          id: true,
          username: true,
          email: true,
          fullName: true,
          avatar: true,
          bio: true,
          createdAt: true,
          updatedAt: true,
        },
    });

    if (!createdUser) {
        throw new ApiError(500, "Something went wrong while registering the user")
    }

    return res.status(201).json(new ApiResponse(200, createdUser, "✅ User registered Successfully"));
  } catch (error) {
    res.status(500).json({ error: "Failed to register user" });
  }
});

const loginUser = asyncHandler(async (req: Request, res: Response) => {});

const logoutUser = asyncHandler(async (req: Request, res: Response) => {});

const refreshAccessToken = asyncHandler(async (req: Request, res: Response) => {
    const incomingRefreshToken = req.cookies.refreshToken || req.body.refreshToken;
  
    if (!incomingRefreshToken) {
      throw new ApiError(401, "Unauthorized request");
    }
  
    try {
      // Verify the refresh token
      const decoded = verifyRefreshToken(incomingRefreshToken) as CustomJwtPayload;
  
      // Find the user associated with the token
      const user = await prisma.user.findUnique({
        where: { id: decoded.id },
      });
  
      if (!user) {
        throw new ApiError(401, "Invalid refresh token");
      }
  
      // Check if the stored refresh token matches the incoming token
      if (user.refreshToken !== incomingRefreshToken) {
        throw new ApiError(401, "Refresh token is expired or has been used");
      }
  
      // Options for cookies
      const cookieOptions = {
        httpOnly: true,
        secure: true, 
      };
  
      // Generate new tokens
      const newAccessToken = generateAccessToken(user.id);
      const newRefreshToken = generateRefreshToken(user.id);
  
      // Update the user's refresh token in the database
      await prisma.user.update({
        where: { id: user.id },
        data: { refreshToken: newRefreshToken },
      });
  
      // Send cookies and response
      return res
        .status(200)
        .cookie("accessToken", newAccessToken, cookieOptions)
        .cookie("refreshToken", newRefreshToken, cookieOptions)
        .json(
          new ApiResponse(
            200,
            { accessToken: newAccessToken, refreshToken: newRefreshToken },
            "Access token refreshed"
          )
        );
    } catch (error: any) {
      throw new ApiError(401, error?.message || "Invalid refresh token");
    }
});
  

export { registerUser, loginUser, logoutUser, refreshAccessToken };
