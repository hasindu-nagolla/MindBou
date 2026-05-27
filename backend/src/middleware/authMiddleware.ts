import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export interface AuthRequest extends Request {
    user?: any; // can replace 'any' with a specific user type if have
}

export const protect = (
    req: AuthRequest,
    res: Response,
    next: NextFunction,
): any => {
    let token;

    // check for token in headers
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        try {
            // get only token from header without 'Bearer'
            token = req.headers.authorization.split(" ")[1]; // 1 is the index of the token in the split array

            // Checks if the key is the original one provided by our server
            const decoded = jwt.verify(token, process.env.JWT_SECRET as string);

            // if key is correct, get the user ID from the token and attach it to the request object
            req.user = decoded;

            // all are correct, give the access to next
            next();
        } catch (error) {
            res.status(401).json({ message: "Not authorized, token failed" });
        }
    }

    // if there is no token, return not authorized
    if (!token) {
        res.status(401).json({ message: "Not authorized, no token" });
    }
};
