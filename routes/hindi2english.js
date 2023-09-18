const express = require('express')
const router = express.Router()
const db = require("./../db/table_data")


// English to hindi Homepage sobdartho.com/dictionary/
router.get('/', (req, res) => {
    let queryparm = req.query.query
    if (queryparm) {
       return res.redirect(`/hindi-to-english/${queryparm.replace(/\s+$/, '').replace(/ /g, '-')}`);
    }
    res.render('hindi2english/en2hi_home')
    })


// Dictionary Results page
router.get('/:input', async(req, res) => {
    let qu = req.query.query
    if (qu) {
        return res.redirect(`/hindi-to-english/${qu.replace(/\s+$/, '').replace(/ /g, '-')}`);
    }
    const hin2eng = await db.getOneH2E(req.params.input);
    if (hin2eng) {
        res.render('hindi2english/dictionaryh2e',{word:req.params.input, info: hin2eng})
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
       return res.redirect(`/hindi-to-english/${queryparm.replace(/\s+$/, '').replace(/ /g, '-').toLowerCase()}`);
    }
    res.render('meaning-in-hindi/not_found')
    })



module.exports = router