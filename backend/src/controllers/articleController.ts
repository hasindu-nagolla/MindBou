import { Response, Request } from "express";
import Article from "../models/Article";
import { AuthRequest } from "../middleware/authMiddleware"; // use AuthRequest to get user info from token

// Create a new article
export const createArticle = async (req: AuthRequest, res: Response): Promise<void> => {
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

// function for getting all articles to display in the frontend
export const getArticles = async (req: Request, res: Response): Promise<void> => {
    try{
        // pull all articles from DB
        // .populate('author', 'name email') is used to get the author details (name and email) from the User model
        // .sort({createdAt: -1}) is used to sort the articles by createdAt in descending order (newest first)
       const articles = await Article.find().populate('author', 'username email').sort({createdAt: -1});
       res.status(200).json(articles);
    }catch(error){
        res.status(500).json({message: 'Server error while fetching articles'});
    }
}

// func for get one article (after click on a article)
export const getArticleById = async (req: Request, res: Response): Promise<void> => {
    try{
        //  find article using id in browser url (req.params.id) and populate author details (name and email) from User model
        const article = await Article.findById(req.params.id).populate('author', 'username email');
        if (!article){
            res.status(404).json({ message: 'Article not found' });
            return;
        }
        res.status(200).json(article);
    }catch(error){
        res.status(500).json({ message: 'Server error while fetching the article' });
    }
}
