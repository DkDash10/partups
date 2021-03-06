import express from 'express';

import { getPosts, getPost, createPost, likePost, dislikePost, deletePost } from '../controllers/posts.js';

const router = express.Router();
import auth from "../middleware/auth.js";

router.get('/', getPosts);
router.post('/', auth, createPost);
// router.patch('/home:id', updatePost);
router.delete('/:id',auth, deletePost);
router.patch('/:id/likePost',auth, likePost);
router.patch('/:id/dislikePost',auth, dislikePost);

export default router;

