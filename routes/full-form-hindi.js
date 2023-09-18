const express = require('express')
const router = express.Router()
const db = require("../db/table_data")


// English to Bengali Homepage sobdartho.com/full-form-hindi/
router.get('/', (req, res) => {
    let queryparm = req.query.query
    if (queryparm) {
       return res.redirect(`/full-form-hindi/${queryparm.replace(/\s+$/, '').replace(/ /g, '-').toLowerCase()}`);
    }
    res.render('full-form-hindi/full-form-home')
    })



// full-form-hindi Results page
router.get('/:input', async(req, res) => {
    let qu = req.query.query;
    if (qu) {
        return res.redirect(`/full-form-hindi/${qu.replace(/\s+$/, '').replace(/ /g, '-').toUpperCase()}`);
    }
    const oneAcronym = await db.getOneAcronym(req.params.input.toUpperCase());

    if (oneAcronym) {
        const similerAcronym = await db.getSimilerAcronym(oneAcronym.id);
        const allAcronym = await db.getAllAcronym(req.params.input.toUpperCase());
        res.render('full-form-hindi/full-form-hindi',{word:req.params.input, all: allAcronym, one: oneAcronym,similerAcronym:similerAcronym})
    } else {
        return res.redirect(`not-found/404`);
    }
    
    // res.status(200).json({eng2bn})
})




// not found 404 page
router.get('/not-found/404', (req, res) => {
    let queryparm = req.query.query;
    if (queryparm) {
       return res.redirect(`/full-form-hindi/${queryparm.replace(/\s+$/, '').replace(/ /g, '-').toLowerCase()}`);
    }
    res.render('full-form-hindi/not_found')
    })


module.exports = router