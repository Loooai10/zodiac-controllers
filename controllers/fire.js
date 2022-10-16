const express = require('express')
const router = express.Router()

app.get("/fire", (req, res)=>{
    res.render("fire.ejs",
    {
        traits:[ 'passionate', 'strong emotions', 'temperamental', 'energetic', 'accomplished', 'interesting']
    })
});
module.exports = router