import express from 'express';
const router = express.Router();

router.post('/auth', (req,res)=>{
    res.send('post.auth - Login');
});

export default router;