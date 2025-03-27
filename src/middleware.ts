import { NextFunction, Request, Response } from "express";
import { z } from "zod"
import { signupSchema, signinSchema } from "./validations";
import { config } from "./config";
import jwt , { JwtPayload} from "jsonwebtoken";



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

// export const userMiddleware = (req: Request, res: Response, next: NextFunction) => {
//     const header = req.headers["authorization"];

//     if (!header) {
//         return res.status(401).json({ message: "Authorization header missing" });
//     }

//     try {
//         const decoded = jwt.verify(header as string, config.JWT_PASSWORD)
//         req.userId = decoded.id;
//         next();
//     } catch (error) {
//         res.status(403).json({ message: "Invalid token" });
//     }
// };



// export const userMiddleware = (req: Request, res: Response, next: NextFunction) => {
//     const header = req.headers.authorization;

//     if (!header || !header.startsWith("Bearer ")) {
//         return res.status(401).json({ message: "Authorization header missing or invalid" });
//     }

//     const token = header.split(" ")[1];
//     try {
//         const decoded = jwt.verify(token, config.JWT_PASSWORD);
//         if (typeof decoded === "object" && "id" in decoded) {
//             req.userId = decoded.id;
//             next();
//         } else {
//             res.status(403).json({ message: "Malformed token" });
//         }
//     } catch (error) {
//         res.status(403).json({ message: "Invalid token" });
//     }
// };

export const userMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const header = req.headers["authorization"];
    const decoded = jwt.verify(header as string, config.JWT_PASSWORD)
    if (decoded) {
        if (typeof decoded === "string") {
            res.status(403).json({
                message: "You are not logged in"
            })
            return;    
        }
        //@ts-ignore
        req.userId = (decoded as JwtPayload).id;
        next()
    } else {
        res.status(403).json({
            message: "You are not logged in"
        })
    }
}