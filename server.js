const express = require('express')
const mongoose = require('mongoose')
const Article = require('./models/article')
const articleRouter = require('./routes/articles')
const app = express()

mongoose.connect('mongodb://127.0.0.1:/blog', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

app.set('view engine', 'ejs')

app.use(express.urlencoded({  extended: false }))

app.get('/', async (req, res) => {
    const articles = await Article.find().sort({
        createdAt: 'desc'
    })
    res.render('articles/index', {
        articles: articles
    })
})

app.listen(5000)

app.use('/articles', articleRouter)