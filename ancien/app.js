const express = require('express')
const app = express()
const port = 5100

app.use(express.static(`public`));
app.use(`/css`, express.static(__dirname + `public/css`))
app.use(`/js`, express.static(__dirname + `public/js`))
app.use(`/img`, express.static(__dirname + `public/img`))

app.set('views', './views')
app.set('view engine','ejs')


app.get('/', (req, res) => {
    res.status(200).render('index')
})

app.get('/game', (req, res) => {
    res.status(200).render('game')
})


app.listen(port, ()=> console.info(`en ecoute sur le port ${port}`))
