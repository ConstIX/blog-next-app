import { body } from "express-validator"

export const postCreateValidator = [
   body("title").isLength({ min: 1 }).isString(),
   body("text").isLength({ min: 1 }).isString(),
   body("imgUrl").optional().isString()
]
