const express = require('express')
const router = express.Router()
const db = require("../db/table_data")


// English to Bengali Homepage sobdartho.com/meaning-in-gujarati/
router.get('/', (req, res) => {
    let queryparm = req.query.query
    if (queryparm) {
       return res.redirect(`/meaning-in-gujarati/${queryparm.replace(/\s+$/, '').replace(/ /g, '-').toLowerCase()}`);
    }
    res.render('meaning-in-gujarati/en2gujarati_home')
    })



// meaning-in-gujarati Results page
router.get('/:input', async(req, res) => {
    let qu = req.query.query
    if (qu) {
        return res.redirect(`/meaning-in-gujarati/${qu.replace(/\s+$/, '').replace(/ /g, '-').toLowerCase()}`);
    }
    const partial = await db.getPartial(req.params.input);
    const eng2gujarati = await db.getGujarati(req.params.input);
    if (eng2gujarati) {
        res.render('meaning-in-gujarati/meaning-in-gujarati',{word:req.params.input, info: eng2gujarati, partial: partial})
    } else {
        return res.redirect(`not-found/404`);
    }
    
    // res.status(200).json({eng2bn})
})




// not found 404 page
router.get('/not-found/404', (req, res) => {
    let queryparm = req.query.query
    if (queryparm) {
       return res.redirect(`/meaning-in-gujarati/${queryparm.replace(/\s+$/, '').replace(/ /g, '-').toLowerCase()}`);
    }
    res.render('meaning-in-gujarati/not_found')
    })


module.exports = router