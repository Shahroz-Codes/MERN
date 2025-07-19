const express = require("express")
const {HandleGenerateShortURL} = require('../controllers/url')
const router = express.Router()

router.post('/',HandleGenerateShortURL)
 module.exports = router