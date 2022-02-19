import express from 'express';

import { getPosts, getPost, createPost, updatePost, likePost, deletePost } from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.get('/home:id', getPost);
router.patch('/home:id', updatePost);
router.delete('/home:id', deletePost);
router.patch('/home:id/likePost', likePost);

export default router;



// import express from 'express';
// const router = express.Router();

// router.get('/',(req,res) =>{
//     res.send('This Works');
// })

// export default router