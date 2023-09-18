const express = require('express')
const router = express.Router()
const db = require("./../db/table_data")


// English to hindi Homepage sobdartho.com/dictionary/
router.get('/', (req, res) => {
    let queryparm = req.query.query
    if (queryparm) {
       return res.redirect(`/hindi-to-french/${queryparm.replace(/\s+$/, '').replace(/ /g, '-')}`);
    }
    res.render('hindi-to-french/hin2fr_home')
    })


// Dictionary Results page
router.get('/:input', async(req, res) => {
    let qu = req.query.query
    if (qu) {
        return res.redirect(`/hindi-to-french/${qu.replace(/\s+$/, '').replace(/ /g, '-')}`);
    }
    const hin2fr = await db.getOneH2fr(req.params.input);
    if (hin2fr) {
        res.render('hindi-to-french/dictionaryh2fr',{word:req.params.input, info: hin2fr})
    } else {
        return res.redirect(`not-found/404`);
    }
    // console.log(bn2bn[0].bn_word.slice(","))
    // res.status(200).json({eng2bn})
})



// not found 404 page
router.get('/not-found/404', (req, res) => {
    let queryparm = req.query.query
    if (queryparm) {
       return res.redirect(`/hindi-to-french/${queryparm.replace(/\s+$/, '').replace(/ /g, '-').toLowerCase()}`);
    }
    res.render('meaning-in-hindi/not_found')
    })



module.exports = router