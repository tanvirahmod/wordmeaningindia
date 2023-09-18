const express = require('express')
const router = express.Router()
const db = require("../db/table_data")


// English to Bengali Homepage sobdartho.com/meaning-in-odia/
router.get('/', (req, res) => {
    let queryparm = req.query.query
    if (queryparm) {
       return res.redirect(`/meaning-in-odia/${queryparm.replace(/\s+$/, '').replace(/ /g, '-').toLowerCase()}`);
    }
    res.render('meaning-in-odia/en2odia_home')
    })



// meaning-in-odia Results page
router.get('/:input', async(req, res) => {
    let qu = req.query.query
    if (qu) {
        return res.redirect(`/meaning-in-odia/${qu.replace(/\s+$/, '').replace(/ /g, '-').toLowerCase()}`);
    }
    const partial = await db.getPartial(req.params.input);
    const eng2odia = await db.getOdia(req.params.input);
    if (eng2odia) {
        res.render('meaning-in-odia/meaning-in-odia',{word:req.params.input, info: eng2odia, partial: partial})
    } else {
        return res.redirect(`not-found/404`);
    }
    
    // res.status(200).json({eng2bn})
})




// not found 404 page
router.get('/not-found/404', (req, res) => {
    let queryparm = req.query.query
    if (queryparm) {
       return res.redirect(`/meaning-in-odia/${queryparm.replace(/\s+$/, '').replace(/ /g, '-').toLowerCase()}`);
    }
    res.render('meaning-in-odia/not_found')
    })


module.exports = router