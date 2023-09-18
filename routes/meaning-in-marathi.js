const express = require('express')
const router = express.Router()
const db = require("../db/table_data")


// English to Bengali Homepage sobdartho.com/meaning-in-marathi/
router.get('/', (req, res) => {
    let queryparm = req.query.query
    if (queryparm) {
       return res.redirect(`/meaning-in-marathi/${queryparm.replace(/\s+$/, '').replace(/ /g, '-').toLowerCase()}`);
    }
    res.render('meaning-in-marathi/en2marathi_home')
    })



// meaning-in-marathi Results page
router.get('/:input', async(req, res) => {
    let qu = req.query.query
    if (qu) {
        return res.redirect(`/meaning-in-marathi/${qu.replace(/\s+$/, '').replace(/ /g, '-').toLowerCase()}`);
    }
    const partial = await db.getPartial(req.params.input);
    const eng2marathi = await db.getMarathi(req.params.input);
    if (eng2marathi) {
        res.render('meaning-in-marathi/meaning-in-marathi',{word:req.params.input, info: eng2marathi, partial: partial})
    } else {
        return res.redirect(`not-found/404`);
    }
    
    // res.status(200).json({eng2bn})
})




// not found 404 page
router.get('/not-found/404', (req, res) => {
    let queryparm = req.query.query
    if (queryparm) {
       return res.redirect(`/meaning-in-marathi/${queryparm.replace(/\s+$/, '').replace(/ /g, '-').toLowerCase()}`);
    }
    res.render('meaning-in-marathi/not_found')
    })


module.exports = router