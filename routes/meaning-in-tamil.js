const express = require('express')
const router = express.Router()
const db = require("../db/table_data")


// English to Bengali Homepage sobdartho.com/meaning-in-tamil/
router.get('/', (req, res) => {
    let queryparm = req.query.query
    if (queryparm) {
       return res.redirect(`/meaning-in-tamil/${queryparm.replace(/\s+$/, '').replace(/ /g, '-').toLowerCase()}`);
    }
    res.render('meaning-in-tamil/en2tam_home')
    })

// pagination page
router.get('/pagination', (req, res) => {
    res.render('meaning-in-tamil/pagination')
})


// meaning-in-tamil Results page
router.get('/:input', async(req, res) => {
    let qu = req.query.query
    if (qu) {
        return res.redirect(`/meaning-in-tamil/${qu.replace(/\s+$/, '').replace(/ /g, '-').toLowerCase()}`);
    }
    const eng2Tamil = await db.getTamil(req.params.input);
    if (eng2Tamil) {
        res.render('meaning-in-tamil/meaning-in-tamil',{word:req.params.input, info: eng2Tamil})
    } else {
        return res.redirect(`not-found/404`);
    }
    
    // res.status(200).json({eng2bn})
})




// not found 404 page
router.get('/not-found/404', (req, res) => {
    let queryparm = req.query.query
    if (queryparm) {
       return res.redirect(`/meaning-in-tamil/${queryparm.replace(/\s+$/, '').replace(/ /g, '-').toLowerCase()}`);
    }
    res.render('meaning-in-tamil/not_found')
    })


module.exports = router