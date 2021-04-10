const express = require('express')
const path = require('path')
const app = express()

const PORT = 85

//using static files 
app.use(express.static(path.join(__dirname, 'public')))

// set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/asma-ul-husna', (req, res) => {
    res.render('asmaUlHusna')
})

app.get('/ramadhan', (req, res) => {
    res.render('ramadhan')
})
app.get('/masjids', (req, res) => {
    res.render('masjids')
})
app.listen(PORT, () => {
    console.log(`SalahTimes is running on port number: ${PORT}`)
})
