import { Response } from "express";
import type { AuthRequest } from "../middleware/authMiddleware";
import User from "../models/User";

export const updateUserProfile = async (req: AuthRequest, res: Response) => {
  try {
    // find corrent user
    const user = await User.findById(req.user.id);

    // check if user exist
    if (!user){
        return res.status(404).json({
            message: "User not found",
        })
    }

    // update fields
    user.username = req.body.username || user.username;
    
  } catch (error) {}
};
