import URL from "../models/url.js";
import shortid from "shortid";

export async function generateShortUrl(req, res){
    try {
        const { url } = req.body; 
        if(!url) return res.status(400).json({
            mess: 'pass the url', 
        })

    const ShortId = shortid.generate()

    const createUrl = await URL.create({
        shortId: ShortId,
        redirectUrl: url,
        visiHistory: []
    });

    return res.status(201).json({
        data: createUrl,
        message: 'Created Ok',
        err: {}
    })
    } catch (error) {
        return res.status(500).json({
            data: {},
            message: 'some error',
            err: error,
        })
    }
}

export async function getWebsite(req, res){
    try {
        const shortId = req.params.shortId;

        const entry = await URL.findOneAndUpdate(
            { shortId },
            {
                $push: {
                    visiHistory: {
                        timestamps: Date.now()
                    }
                }
            },
            { new: true }
        );

        res.redirect(entry.redirectUrl);

    } catch (error) {
        return res.status(500).json({
            data: {},
            message: 'some error in get',
            err: error,
        })
    }
}

export async function getAnalytics (req,res) {
    try {
        const shortId = req.params.shortId;
        const result = await URL.findOne({shortId});
        return res.status(200).json({
            data: result.visiHistory.length,
            analytics: result.visiHistory,
            message: 'Created Ok',
            err: {}
        })
    } catch (error) {
        return res.status(500).json({
            data: {},
            message: 'some error in get',
            err: error,
        })
    }
}
