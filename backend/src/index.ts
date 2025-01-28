import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

// Load environment variables
dotenv.config();

const app: Application = express();

// Middleware
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:8000", // Default origin
    credentials: true, // Enable cookies sharing
  })
);
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// Routes Import
import authRouter from "./routes/auth.routes";
import userRouter from "./routes/user.routes";
import communityRouter from "./routes/community.routes";
import communityMembersRouter from "./routes/communityMembers.routes";
import postRouter from "./routes/post.routes";
import commentRouter from "./routes/comment.routes";
import likeRouter from "./routes/like.routes";

// Routes Declaration
app.use("/api/v1/users", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/communities", communityRouter);
app.use("/api/v1/community-members", communityMembersRouter);
app.use("/api/v1/posts", postRouter);
app.use("/api/v1/comments", commentRouter);
app.use("/api/v1/likes", likeRouter);

// 404 Route Handler
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: "The requested resource was not found.",
  });
});

// Global Error Handling Middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "An unexpected error occurred.",
  });
});

// Server Initialization
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`⚙️  Server is running at port: ${PORT}`);
});