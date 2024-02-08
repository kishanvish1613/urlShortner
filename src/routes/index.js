import express from 'express';
import {generateShortUrl, getWebsite, getAnalytics} from '../controllers/url-controller.js'

const router = express.Router();

router.post('/', generateShortUrl);
router.get('/:shortId', getWebsite);
router.get('/analytics/:shortId', getAnalytics)

export default router;