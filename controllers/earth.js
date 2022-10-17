// const express = require('express')
// const router = express.Router()

// router.get("/earth", (req, res)=>{
//     res.render("earth.ejs",
//     {
//         traits:['grounded', 'helpful', 'practical', 'realistic', 'materialistic', 'dependable']
//     })
// });
// module.exports = router

const express = require('express')

const router = express.Router()
//CONTROLLER
const signs = ['Virgo', 'capricon', 'taurus']

router.get('/', (req,res) => {
    res.render('earth.ejs', {signsList: signs, earthTraits:['grounded', 'helpful', 'practical', 'realistic', 'materialistic', 'dependable']})
})

router.get('/virgo', (req,res) => {
    const url = 'https://www.thesun.co.uk/wp-content/uploads/2020/07/KH-GRAPHIC-HOROSCOPE-VIRGO-1.jpeg'

    res.render('image.ejs', {url: url})
})

router.get('/taurus', (req,res) => {
    const url = 'https://cdn.w600.comps.canstockphoto.com/taurus-astrological-sign-for-horoscope-vector-clipart_csp87369008.jpg'
    res.render('image.ejs', {url: url})
})

router.get('/capricon', (req,res) => {
    const url = 'https://cdn.images.express.co.uk/img/dynamic/130/590x/capricorn-march-2020-horoscope-horoscopes-career-love-money-1248463.jpg?r=1582920774841'
    res.render('image.ejs', {url: url})
})

module.exports = router;