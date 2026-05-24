import express from 'express';
import {loginUser, registerUser} from '../controllers/authController';

const router = express.Router();

// කවුරුහරි 'POST' ක්‍රමයට '/register' කියන පාරෙන් ආවොත්, 
// එයාව අර අපි හැදූ 'registerUser' මොළයට (Controller එකට) බාර දෙනවා
router.post('/register', registerUser);
router.post('/login', loginUser);

export default router;