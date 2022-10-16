const express = require('express')
const router = express.Router()


router.get("/water", (req, res)=>{
    res.render("water.ejs", 
    {
        traits:[ 'private', 'mysterious', 'psychic', 'charming', 'emotional', 'sensitive']
    })
})
module.exports = router