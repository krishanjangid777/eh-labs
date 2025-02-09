import { Post } from "../model/post.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import {uploadOnCloudinary} from "../utils/cloudinary.js"
import { ApiError } from '../utils/ApiError.js'
import { ApiResponse } from '../utils/ApiResponse.js'

const createPost = asyncHandler(async (req, res) => {
    const {title, description, date, event, webinar} = req.body

    if (
        [title, description, date, event, webinar].some((field) => field?.trim() === "")
    ) {
        throw new ApiError(400, "All dields are required !")
    }

    let imageLinkLocalPath;
    if (req.files && Array.isArray(req.files.imageLink) && req.files.imageLink.length > 0) {
        imageLinkLocalPath = req.files?.imageLink[0]?.path
    }
    if (!imageLinkLocalPath) {
        throw new ApiError(400, "Event image file is required")
    }
    console.log(imageLinkLocalPath)

    const imageLink = await uploadOnCloudinary(imageLinkLocalPath)
    if (!imageLink) {
        throw new ApiError(400, "Event image... file is required")
    }

    const post = Post.create({
        title,
        description,
        date,
        event,
        webinar,
        imageLink: imageLink.url
    })

    return res.status(201).json(
        new ApiResponse(200, {
            title,
            description,
            date,
            event,
            webinar,
            imageLink: imageLink.url
        }, "✅ Post created Successfully")
    )
})

const getAllEvents = asyncHandler(async (req, res) => {
    const events = await Post.find({event: "true"})

    return res.status(201).json(
        new ApiResponse(200, events, "Fetch all events data successfully!")
    )
})

const getAllWebinars = asyncHandler(async (req, res) => {
    const events = await Post.find({webinar: "true"})

    return res.status(201).json(
        new ApiResponse(200, events, "Fetch all webinars data successfully!")
    )
})

export {createPost, getAllEvents, getAllWebinars}