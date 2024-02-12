import express from 'express';
import URL from '../models/url.js';

const router = express.Router();

router.get('/', async (req, res) => {
    const allurls = await URL.find({});
    return res.render('home',{
        urls: allurls
    });
})


router.get('/signup', async (req, res) => {
    return res.render('signup')
})

router.get('/login', async (req, res) => {
    return res.render('login')
})



export default router;