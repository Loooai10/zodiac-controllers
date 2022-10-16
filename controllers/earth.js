const express = require('express')
const router = express.Router()

router.get("/earth", (req, res)=>{
    res.render("earth.ejs",
    {
        traits:['grounded', 'helpful', 'practical', 'realistic', 'materialistic', 'dependable']
    })
});
module.exports = router