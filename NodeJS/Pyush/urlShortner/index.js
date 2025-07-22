const express = require("express")
const path = require('path')
const urlRoute = require('./routes/url')
const { connectToMongoDB } = require('./DBconnection')
const { URL } = require('./models/url')

const app = express()
const PORT = 8000

//DB connection
connectToMongoDB('mongodb://127.0.0.1:27017/short-url').then(() => console.log("DB conected"));

//ejs
app.set('view engine', 'ejs')
app.set('views', path.resolve("./views"));

//middlewares
app.use(express.json())


app.get('/', async (req, res) => {
    const allUrls = await URL.find({})
    res.render('home', {
        urls: allUrls,
    })
})
//
app.use('/url', urlRoute)
app.get('/:shortid', async (req, res) => {
//     const shortId = req.params.shortid;
    const entry = await URL.findOneAndUpdate(
        {
            shortId
        },
        {
            $push: {
                visitHistory: {
                    timestamp: Date.now(),
                },
            }
        }
    );
    console.log(entry.redirectURL);

    res.redirect(entry.redirectURL)
});

app.listen(PORT, () => console.log(`Server started at PORT ${PORT}`)
)