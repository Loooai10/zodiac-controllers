const express = require('express')
const router = express.Router()

// routes go here

  router.get("/air", (req, res)=>{
    res.render("air.ejs", 
    {
        traits:['movement', 'creativity', 'action', 'adventure', 'exciting', 'easily provoked']
    })
});

module.exports = router