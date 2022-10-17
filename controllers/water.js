// const express = require('express')
// const router = express.Router()
// const signs = ['Pisces', 'Aquarius', 'Gemini']


// router.get("/water", (req, res)=>{
//     res.render("water.ejs", 
//     {signsList: signs}
//         traits:[ 'private', 'mysterious', 'psychic', 'charming', 'emotional', 'sensitive']
//     })
// module.exports = router

// const express = require('express')
// const router = express.Router()


// router.get("/water", (req, res)=>{
//     res.send("water.ejs", 
//     {
//         traits:[ 'private', 'mysterious', 'psychic', 'charming', 'emotional', 'sensitive']
//     })
// })
// module.exports = router

//water controller
const express = require('express')

const router = express.Router()
//CONTROLLER
const signs = ['Pisces', 'scorpio', 'cancer']

router.get('/', (req,res) => {
    res.render('water.ejs', {signsList: signs, waterTraits:[ 'private', 'mysterious', 'psychic', 'charming', 'emotional', 'sensitive']})
})

router.get('/Pisces', (req,res) => {
    const url = 'https://www.wikihow.com/images/thumb/8/82/Pisces-Zodiac-Sign-Step-1-Version-2.jpg/v4-460px-Pisces-Zodiac-Sign-Step-1-Version-2.jpg'

    res.render('image.ejs', {url: url})
})

router.get('/scorpio', (req,res) => {
    const url = 'https://cdn.images.express.co.uk/img/dynamic/130/590x/secondary/scorpio-horoscope-may-2020-horoscopes-star-sign-2446196.webp?r=1588440162473'
    res.render('image.ejs', {url: url})
})

router.get('/cancer', (req,res) => {
    const url = 'https://i.pinimg.com/736x/cc/32/17/cc321792bd9808970beb188d8c64f047.jpg'
    res.render('image.ejs', {url: url})
})

module.exports = router;