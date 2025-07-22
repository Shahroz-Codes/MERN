const { nanoid } = require('nanoid')
const { URL } = require('../models/url')

async function HandleGenerateShortURL(req, res) {
    const body = req.body
    if (!body.url) return res.status(400).json({ error: 'url is required' })
    const shortID = nanoid(9)
    await URL.create({
        shortId: shortID,
        redirectURL: body.url,
        visitedHistory: []
    })
    res.json({ id: shortID })
}

async function HandleGetAnalytics(req, res) {
    const shortId = req.params.id
    const result = await URL.findOne({ shortId })
    return res.json({
        totalClicks: result.visitHistory.length,
        analytics: result.visitHistory,
    })
}




module.exports = {
    HandleGenerateShortURL,
    HandleGetAnalytics
}