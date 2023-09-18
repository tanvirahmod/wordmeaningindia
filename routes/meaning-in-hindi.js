const express = require('express')
const router = express.Router()
const db = require("../db/table_data")


// English to Bengali Homepage sobdartho.com/meaning-in-hindi/
router.get('/', (req, res) => {
    let queryparm = req.query.query
    if (queryparm) {
       return res.redirect(`/meaning-in-hindi/${queryparm.replace(/\s+$/, '').replace(/ /g, '-').toLowerCase()}`);
    }
    res.render('meaning-in-hindi/en2hin_home')
    })

// pagination page
router.get('/pagination', (req, res) => {
    res.render('meaning-in-hindi/pagination')
})


// meaning-in-hindi Results page
router.get('/:input', async(req, res) => {
    let qu = req.query.query
    if (qu) {
        return res.redirect(`/meaning-in-hindi/${qu.replace(/\s+$/, '').replace(/ /g, '-').toLowerCase()}`);
    }
    const eng2bn = await db.getOne(req.params.input);
    if (eng2bn) {
        res.render('meaning-in-hindi/meaning-in-hindi',{word:req.params.input, info: eng2bn})
    } else {
        return res.redirect(`not-found/404`);
    }
    
    // res.status(200).json({eng2bn})
})




// not found 404 page
router.get('/not-found/404', (req, res) => {
    let queryparm = req.query.query
    if (queryparm) {
       return res.redirect(`/meaning-in-hindi/${queryparm.replace(/\s+$/, '').replace(/ /g, '-').toLowerCase()}`);
    }
    res.render('meaning-in-hindi/not_found')
    })


module.exports = router