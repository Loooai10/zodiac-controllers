const express = require('express')
const router = express.Router()

// // routes go here

//   router.get("/air", (req, res)=>{
//     res.render("air.ejs", 
//     {
//         airTraits:['movement', 'creativity', 'action', 'adventure', 'exciting', 'easily provoked']
//     })
// });

// module.exports = router

const signs = ['libra', 'aquarius', 'Gemini']

router.get('/', (req,res) => {
    res.render('air.ejs', {signsList: signs,  airTraits:['movement', 'creativity', 'action', 'adventure', 'exciting', 'easily provoked']})
})

router.get('/libra', (req,res) => {
    const url = 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202210/libra_8-sixteen_nine.jpg?VersionId=72JkS3X9.u0PIemIL2NWVI14O7VgxiRv'

    res.render('image.ejs', {url: url})
})

router.get('/aquarius', (req,res) => {
    const url = 'https://askastrology.com/wp-content/uploads/2020/07/aquarius_astrology_sign.jpg'
    res.render('image.ejs', {url: url})
})

router.get('/Gemini', (req,res) => {
    const url = 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202210/gemini_8-sixteen_nine.jpg?VersionId=XeReytylrix58wc3jY8csgAbKbZ4LJxh&size=690:388'
    res.render('image.ejs', {url: url})
})

module.exports = router;