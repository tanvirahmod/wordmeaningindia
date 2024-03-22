const express = require('express')
const router = express.Router()
const db = require("../db/table_data")


// English to Bengali Homepage sobdartho.com/full-form-category/
router.get('/', (req, res) => {
    let queryparm = req.query.query
    if (queryparm) {
       return res.redirect(`/full-form-category/${queryparm.replace(/\s+$/, '').replace(/ /g, '-').toLowerCase()}`);
    }
    res.render('full-form-category/full-form-home')
    })



// full-form-category Results page
router.get('/:input', async(req, res) => {
    // search input query
    let qu = req.query.query;
    if (qu) {
        return res.redirect(`/full-form-category/${qu.replace(/\s+$/, '').replace(/ /g, '-').toUpperCase()}`);
    }


    let short_form = req.params.input.split("-full-form-in-")[0]
    let category = req.params.input.split("-full-form-in-")[1] || ""
    category = category.replace("-"," ").replace("-"," ").replace("Non Profit","Non-Profit")
    let category_placeholder = ""
    if (category.length < 1){
        category_placeholder = "English"
    }


    const acronymOne = await db.getOneAcronymCategory(short_form.toUpperCase());
    let acronymOne_id = acronymOne?.id || 12616
    console.log(acronymOne_id)
    const allAcronym = await db.getAllAcronymCategory(short_form.toUpperCase(), category.replace("English",""));

    if (allAcronym.length > 0) {
        const similerAcronym = await db.getSimilerAcronymCategory(acronymOne_id);
        res.render('full-form-category/full-form-category',{word:req.params.input, all: allAcronym, one: allAcronym[0],similerAcronym:similerAcronym, category_placeholder:category_placeholder})
    } else {
        return res.redirect(`not-found/404`);
    }
    
    // res.status(200).json({eng2bn})
})




// not found 404 page
router.get('/not-found/404', (req, res) => {
    let queryparm = req.query.query;
    if (queryparm) {
       return res.redirect(`/full-form-category/${queryparm.replace(/\s+$/, '').replace(/ /g, '-').toLowerCase()}`);
    }
    res.render('full-form-category/not_found')
    })


module.exports = router