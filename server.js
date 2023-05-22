const express = require('express')
const mongoose = require('mongoose')
const articleRouter = require('./routes/articles')
const app = express()

mongoose.connect('mongodb://127.0.0.1:/blog', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.set('view engine', 'ejs')

app.use(express.urlencoded({  extended: false }))

app.get('/', (req, res) => {
    const articles = [{
        title: 'Test Title',
        createdAt: new Date(),
        description: 'Test description'
    },{
        title: 'Test Title 2',
        createdAt: new Date(),
        description: 'Test description 2'
    }]
    res.render('articles/index', {
        articles: articles
    })
})

app.listen(5000)

app.use('/articles', articleRouter)