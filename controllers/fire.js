// const express = require('express')
// const router = express.Router()

// router.get("/fire", (req, res)=>{
//     res.render("fire.ejs",
//     {
//         traits:[ 'passionate', 'strong emotions', 'temperamental', 'energetic', 'accomplished', 'interesting']
//     })
// });
// module.exports = router

//water controller
const express = require('express')

const router = express.Router()
//CONTROLLER
const signs = ['sagittarius', 'leo', 'aries']

router.get('/', (req,res) => {
    res.render('fire.ejs', {signsList: signs, fireTraits:[ 'passionate', 'strong emotions', 'temperamental', 'energetic', 'accomplished', 'interesting']})
})

router.get('/leo', (req,res) => {
    const url = 'https://www.pinkvilla.com/files/styles/large/public/four-reasons-why-you-will-never-regret-dating-a-leo_main_3.jpg?itok=PF3MwyfS'

    res.render('image.ejs', {url: url})
})

router.get('/aries', (req,res) => {
    const url = 'https://cdn.images.express.co.uk/img/dynamic/130/590x/secondary/aries-january-horoscope-2020-horoscopes-star-sign-2236301.jpg?r=1577801378689'
    res.render('image.ejs', {url: url})
})
router.get('/sagittarius', (req,res) => {
    const url = 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202210/sagittarius_11-sixteen_nine.jpg?VersionId=MIQ2zTa6ViJ8Nz68HSu4.WNZBjday.5I&size=690:388'
    res.render('image.ejs', {url: url})
})

module.exports = router;