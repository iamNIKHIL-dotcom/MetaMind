import { NextFunction, Request, Response } from "express";
import { z } from "zod"
import { signupSchema,signinSchema } from "./validations";


// export const validate = (schema: z.ZodSchema) => (req: Request, res:Response, next: NextFunction) => {
//     try {
//       schema.parse(req.body);
//       next();
//     } catch (error) {
//       if (error instanceof z.ZodError) {
//         return res.status(400).json({
//           message: "Validation failed",
//           errors: error.errors
//         });
//       }
//       res.status(500).json({ message: "Internal server error" });
//     }
//   };

export const userMiddleware = (req : Request, res : Response, next : NextFunction) =>{


}