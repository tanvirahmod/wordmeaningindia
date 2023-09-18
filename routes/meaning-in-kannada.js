const express = require('express')
const router = express.Router()
const db = require("../db/table_data")


// English to Bengali Homepage sobdartho.com/meaning-in-kannada/
router.get('/', (req, res) => {
    let queryparm = req.query.query
    if (queryparm) {
       return res.redirect(`/meaning-in-kannada/${queryparm.replace(/\s+$/, '').replace(/ /g, '-').toLowerCase()}`);
    }
    res.render('meaning-in-kannada/en2kannada_home')
    })



// meaning-in-kannada Results page
router.get('/:input', async(req, res) => {
    let qu = req.query.query
    if (qu) {
        return res.redirect(`/meaning-in-kannada/${qu.replace(/\s+$/, '').replace(/ /g, '-').toLowerCase()}`);
    }
    const partial = await db.getPartial(req.params.input);
    const eng2kannada = await db.getKannada(req.params.input);
    if (eng2kannada) {
        res.render('meaning-in-kannada/meaning-in-kannada',{word:req.params.input, info: eng2kannada, partial: partial})
    } else {
        return res.redirect(`not-found/404`);
    }
    
    // res.status(200).json({eng2bn})
})




// not found 404 page
router.get('/not-found/404', (req, res) => {
    let queryparm = req.query.query
    if (queryparm) {
       return res.redirect(`/meaning-in-kannada/${queryparm.replace(/\s+$/, '').replace(/ /g, '-').toLowerCase()}`);
    }
    res.render('meaning-in-kannada/not_found')
    })


module.exports = router