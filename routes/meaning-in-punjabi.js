const express = require('express')
const router = express.Router()
const db = require("../db/table_data")


// English to Bengali Homepage sobdartho.com/meaning-in-punjabi/
router.get('/', (req, res) => {
    let queryparm = req.query.query
    if (queryparm) {
       return res.redirect(`/meaning-in-punjabi/${queryparm.replace(/\s+$/, '').replace(/ /g, '-').toLowerCase()}`);
    }
    res.render('meaning-in-punjabi/en2punjabi_home')
    })



// meaning-in-punjabi Results page
router.get('/:input', async(req, res) => {
    let qu = req.query.query
    if (qu) {
        return res.redirect(`/meaning-in-punjabi/${qu.replace(/\s+$/, '').replace(/ /g, '-').toLowerCase()}`);
    }
    const partial = await db.getPartial(req.params.input);
    const eng2punjabi = await db.getPunjabi(req.params.input);
    if (eng2punjabi) {
        res.render('meaning-in-punjabi/meaning-in-punjabi',{word:req.params.input, info: eng2punjabi, partial: partial})
    } else {
        return res.redirect(`not-found/404`);
    }
    
    // res.status(200).json({eng2bn})
})




// not found 404 page
router.get('/not-found/404', (req, res) => {
    let queryparm = req.query.query
    if (queryparm) {
       return res.redirect(`/meaning-in-punjabi/${queryparm.replace(/\s+$/, '').replace(/ /g, '-').toLowerCase()}`);
    }
    res.render('meaning-in-punjabi/not_found')
    })


module.exports = router