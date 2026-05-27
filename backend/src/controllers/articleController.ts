import { Response } from "express";
import Article from "../models/Article";
import { AuthRequest } from "../middleware/authMiddleware"; // use AuthRequest to get user info from token

// Create a new article
import const createArticle = async (req: AuthRequest, res: Response): Promise<void> => {
    try {
        // get title and content from request body (frontend)
        const { title, content } = req.body;

        // give error if title or content is missing
        if (!title || !content) {
            res.status(400).json({ message: "Title and content are required" });
            return;
        }

        // prepare a new article to send to database
        const article = new Article({
            title,
            content,
            author: req.user.id, // මෙතනදී author ට දෙන්නේ අර Security Guard (Middleware එක) යතුරෙන් හොයාගත්ත User ගේ ID එක
        });

        // save the article to database
        const savedArticle = await article.save();

        res.status(201).json(savedArticle); // return the saved article to frontend
    } catch (error) {
        res.status(500).json({ message: "Error creating article" });
    }

}

