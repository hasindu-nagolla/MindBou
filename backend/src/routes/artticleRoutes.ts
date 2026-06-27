import express from 'express';
import {createArticle, getArticles, getArticleById} from '../controllers/articleController';
import { protect} from '../middleware/authMiddleware'; // guard for protecting routes (only logged in users can create articles)

const router = express.Router();

// public routes
router.get('/', getArticles);
router.get('/:id', getArticleById)

// protected routed
router.post('/', protect, createArticle)

export default router;