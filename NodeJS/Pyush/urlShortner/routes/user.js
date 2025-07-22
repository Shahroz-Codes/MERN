const express = require("express")
const { HandleGenerateShortURL, HandleGetAnalytics } = require('../controllers/url')
const router = express.Router()

router.post('/', HandleGenerateShortURL)
router.get('/analytics/:id', HandleGetAnalytics)


module.exports = router