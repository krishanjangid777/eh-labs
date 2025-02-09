import { asyncHandler } from '../utils/asyncHandler.js'
import { ApiError } from '../utils/ApiError.js'
import { ApiResponse } from '../utils/ApiResponse.js'
import { Form } from '../model/form.model.js'

const submitForm = asyncHandler(async (req, res) => {
    const {email, fullName, pastExprience, description} = req.body

    if (
        [fullName, email, pastExprience, description].some((field) => field?.trim() === "")
    ) {
        throw new ApiError(400, "All dields are required !")
    }

    const existedMember = await Form.findOne({
        email
    })

    if (existedMember) {
        throw new ApiError(409, "Member with email already exists")
    }

    const member = Form.create({
        email,
        fullName,
        pastExprience,
        description
    })

    return res.status(201).json(
        new ApiResponse(200, {email, fullName, pastExprience, description}, "✅ User registered Successfully")
    )
})

export {submitForm}