import { v2 as cloudinary, UploadApiResponse, UploadApiErrorResponse } from "cloudinary";
import fs from "fs/promises"; // Use Promises API for asynchronous file operations
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
});

const uploadOnCloudinary = async (localFilePath: string): Promise<UploadApiResponse | null> => {
  if (!localFilePath) {
    console.error("❌ Local file path is not provided");
    return null;
  }

  try {
    // Upload the file to Cloudinary
    const response: UploadApiResponse = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    console.log("✅ File uploaded to Cloudinary:", response.url);

    // Delete the local file after upload
    await fs.unlink(localFilePath);
    return response;
  } catch (error: unknown) {
    console.error("❌ Error uploading to Cloudinary:", error);

    // Attempt to delete the file even if the upload fails
    try {
      await fs.unlink(localFilePath);
    } catch (fsError) {
      console.error("❌ Error deleting local file:", fsError);
    }

    return null;
  }
};

export { uploadOnCloudinary };