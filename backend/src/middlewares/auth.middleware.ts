import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { ApiError } from "../utils/ApiError";
import prisma from "../config/prisma.config";

// Your access token secret (preferably should come from environment variables)
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET || "access-secret";

// Custom type for the JWT payload
interface CustomJwtPayload {
  id: number; // Assuming 'id' is a number, modify as per your schema
}

export const verifyJWT = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      // Get token from cookies or Authorization header
      const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "");

      if (!token) {
        throw new ApiError(401, "Unauthorized request");
      }

      // Verify and decode the token
      const decodedToken = jwt.verify(token, ACCESS_TOKEN_SECRET) as CustomJwtPayload; // Type the decoded token

      // Retrieve the user based on the decoded id
      const user = await prisma.user
        .findUnique({
          where: { id: decodedToken.id },
          select: { id: true, username: true, email: true, fullName: true }, // Select only the fields needed
        });

      if (!user) {
        throw new ApiError(401, "Invalid Access Token");
      }

      // Attach the user to the request object
      //@ts-ignore
      req.user = user;
      
      // Proceed to the next middleware or route handler
      next();
    } catch (error: any) {
      throw new ApiError(401, error?.message || "Invalid Access Token");
    }
  }
);