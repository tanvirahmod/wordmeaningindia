const express = require('express')
const en2hinRouter = require('./routes/meaning-in-hindi') // it does to refer to url. it refers to routes directory
const hindi2hindi = require('./routes/hindi2hindi')
const hindi2english = require('./routes/hindi2english')
// for Tamil Language
const en2tamRouter = require('./routes/meaning-in-tamil')
// hindi to French Route
const hin2frRouter = require('./routes/hindi-to-french.js')
// english to telugu -----------------
const en2teluguRouter = require('./routes/meaning-in-telugu')
// english to marathi
const en2marathiRouter = require('./routes/meaning-in-marathi.js')
// english to gujarati
const en2gujaratiRouter = require('./routes/meaning-in-gujarati.js')
// english to Kannada
const en2kannadaRouter = require('./routes/meaning-in-kannada.js')
// english to Odia
const en2odiaRouter = require('./routes/meaning-in-odia.js')
// english to Punjabi
const en2punjabiRouter = require('./routes/meaning-in-punjabi.js')
// full form in hindi language
const fullformhindiRouter = require('./routes/full-form-hindi.js')



const app = express()



app.set('view engine','ejs')
app.use(express.static('public'));


app.use('/meaning-in-hindi', en2hinRouter)
app.use('/hindi-to-hindi', hindi2hindi)
app.use('/hindi-to-english', hindi2english)
// for Tamil Langulage
app.use('/meaning-in-tamil', en2tamRouter)
// hindi to french
app.use("/hindi-to-french", hin2frRouter)
// english to telugu
app.use('/meaning-in-telugu', en2teluguRouter)
// english to marathi
app.use('/meaning-in-marathi', en2marathiRouter)
// english to gujarati
app.use('/meaning-in-gujarati', en2gujaratiRouter)
// english to Kannada
app.use('/meaning-in-kannada', en2kannadaRouter)
// english to Odia
app.use('/meaning-in-odia', en2odiaRouter)
// english to Punjabi
app.use('/meaning-in-punjabi', en2punjabiRouter)
// full form in hindi langulage
app.use('/full-form-hindi', fullformhindiRouter)




app.get('/', (req, res) => {
    let queryparm = req.query.query
    if (queryparm) {
       return res.redirect(`/meaning-in-hindi/${queryparm.replace(/\s+$/, '').replace(/ /g, '-').toLowerCase()}`);
    }
    res.render('index')
})



app.get('/privacy-policy', (req, res) => {
  res.render('otherPages/privacy_policy')
})

app.get('/terms-and-conditions', (req, res) => {
  res.render('otherPages/terms_and_conditions')
})

app.get('/disclaimer', (req, res) => {
  res.render('otherPages/disclaimer')
})

app.get('/contact', (req, res) => {
  res.render('otherPages/contact')
})




app.get('/sitemap.xml', async function(req, res, next){
  res.set('Content-Type', 'text/xml')
  res.sendFile(__dirname + '/public/sitemaps/sitemap.xml');
})

app.get('/sitemap-eng2hin1.xml', async function(req, res, next){
  res.set('Content-Type', 'text/xml')
  res.sendFile(__dirname + '/public/sitemaps/en2hin1.xml');
})

app.get('/sitemap-eng2hin2.xml', async function(req, res, next){
res.set('Content-Type', 'text/xml')
res.sendFile(__dirname + '/public/sitemaps/en2hin2.xml');
})

app.get('/sitemap-eng2hin3.xml', async function(req, res, next){
res.set('Content-Type', 'text/xml')
res.sendFile(__dirname + '/public/sitemaps/en2hin3.xml');
})

app.get('/sitemap-eng2hin4.xml', async function(req, res, next){
res.set('Content-Type', 'text/xml')
res.sendFile(__dirname + '/public/sitemaps/en2hin4.xml');
})

app.get('/hinditoenglish1.xml', async function(req, res, next){
  res.set('Content-Type', 'text/xml')
  res.sendFile(__dirname + '/public/sitemaps/hinditoenglish1.xml');
})

app.get('/hinditoenglish2.xml', async function(req, res, next){
  res.set('Content-Type', 'text/xml')
  res.sendFile(__dirname + '/public/sitemaps/hinditoenglish2.xml');
})


app.get('/hinditoenglish3.xml', async function(req, res, next){
  res.set('Content-Type', 'text/xml')
  res.sendFile(__dirname + '/public/sitemaps/hinditoenglish3.xml');
})

app.get('/hinditoenglish4.xml', async function(req, res, next){
  res.set('Content-Type', 'text/xml')
  res.sendFile(__dirname + '/public/sitemaps/hinditoenglish4.xml');
})

app.get('/hinditoenglish5.xml', async function(req, res, next){
  res.set('Content-Type', 'text/xml')
  res.sendFile(__dirname + '/public/sitemaps/hinditoenglish5.xml');
})


// English to Tamil Sitemaps --------------------------------
app.get('/sitemap-eng2tamil1.xml', async function(req, res, next){
  res.set('Content-Type', 'text/xml')
  res.sendFile(__dirname + '/public/sitemaps/eng2tamil1.xml');
})

app.get('/sitemap-eng2tamil2.xml', async function(req, res, next){
res.set('Content-Type', 'text/xml')
res.sendFile(__dirname + '/public/sitemaps/eng2tamil2.xml');
})

app.get('/sitemap-eng2tamil3.xml', async function(req, res, next){
res.set('Content-Type', 'text/xml')
res.sendFile(__dirname + '/public/sitemaps/eng2tamil3.xml');
})

app.get('/sitemap-eng2tamil4.xml', async function(req, res, next){
res.set('Content-Type', 'text/xml')
res.sendFile(__dirname + '/public/sitemaps/eng2tamil4.xml');
})


// hindi to french sitemap
app.get('/sitemap-hindi2french1.xml', async function(req, res, next){
  res.set('Content-Type', 'text/xml')
  res.sendFile(__dirname + '/public/sitemaps/hindi2french1.xml');
  })

app.get('/sitemap-hindi2french2.xml', async function(req, res, next){
  res.set('Content-Type', 'text/xml')
  res.sendFile(__dirname + '/public/sitemaps/hindi2french2.xml');
  })

app.get('/sitemap-hindi2french3.xml', async function(req, res, next){
  res.set('Content-Type', 'text/xml')
  res.sendFile(__dirname + '/public/sitemaps/hindi2french3.xml');
  })

app.get('/sitemap-hindi2french4.xml', async function(req, res, next){
  res.set('Content-Type', 'text/xml')
  res.sendFile(__dirname + '/public/sitemaps/hindi2french4.xml');
  })


// hindi to telugu sitemaps -----------------

app.get('/sitemap-en2telugu1.xml', async function(req, res, next){
  res.set('Content-Type', 'text/xml')
  res.sendFile(__dirname + '/public/sitemaps/en2telugu_sitemap1.xml');
})
app.get('/sitemap-en2telugu2.xml', async function(req, res, next){
  res.set('Content-Type', 'text/xml')
  res.sendFile(__dirname + '/public/sitemaps/en2telugu_sitemap2.xml');
})
app.get('/sitemap-en2telugu3.xml', async function(req, res, next){
  res.set('Content-Type', 'text/xml')
  res.sendFile(__dirname + '/public/sitemaps/en2telugu_sitemap3.xml');
})
app.get('/sitemap-en2telugu4.xml', async function(req, res, next){
  res.set('Content-Type', 'text/xml')
  res.sendFile(__dirname + '/public/sitemaps/en2telugu_sitemap4.xml');
})


// English to Marathi sitemaps

app.get('/sitemap-en2marathi1.xml', async function(req, res, next){
  res.set('Content-Type', 'text/xml')
  res.sendFile(__dirname + '/public/sitemaps/en2marathi_sitemap1.xml');
})
app.get('/sitemap-en2marathi2.xml', async function(req, res, next){
  res.set('Content-Type', 'text/xml')
  res.sendFile(__dirname + '/public/sitemaps/en2marathi_sitemap2.xml');
})
app.get('/sitemap-en2marathi3.xml', async function(req, res, next){
  res.set('Content-Type', 'text/xml')
  res.sendFile(__dirname + '/public/sitemaps/en2marathi_sitemap3.xml');
})
app.get('/sitemap-en2marathi4.xml', async function(req, res, next){
  res.set('Content-Type', 'text/xml')
  res.sendFile(__dirname + '/public/sitemaps/en2marathi_sitemap4.xml');
})




// English to Gujarati sitemaps

app.get('/sitemap-en2gujarati1.xml', async function(req, res, next){
  res.set('Content-Type', 'text/xml')
  res.sendFile(__dirname + '/public/sitemaps/en2gujarati_sitemap1.xml');
})

app.get('/sitemap-en2gujarati2.xml', async function(req, res, next){
  res.set('Content-Type', 'text/xml')
  res.sendFile(__dirname + '/public/sitemaps/en2gujarati_sitemap2.xml');
})

app.get('/sitemap-en2gujarati3.xml', async function(req, res, next){
  res.set('Content-Type', 'text/xml')
  res.sendFile(__dirname + '/public/sitemaps/en2gujarati_sitemap3.xml');
})

app.get('/sitemap-en2gujarati4.xml', async function(req, res, next){
  res.set('Content-Type', 'text/xml')
  res.sendFile(__dirname + '/public/sitemaps/en2gujarati_sitemap4.xml');
})



// English to Kannada sitemaps
app.get('/sitemap-en2kannada1.xml', async function(req, res, next){
  res.set('Content-Type', 'text/xml')
  res.sendFile(__dirname + '/public/sitemaps/en2kannada_sitemap1.xml');
})

app.get('/sitemap-en2kannada2.xml', async function(req, res, next){
  res.set('Content-Type', 'text/xml')
  res.sendFile(__dirname + '/public/sitemaps/en2kannada_sitemap2.xml');
})

app.get('/sitemap-en2kannada3.xml', async function(req, res, next){
  res.set('Content-Type', 'text/xml')
  res.sendFile(__dirname + '/public/sitemaps/en2kannada_sitemap3.xml');
})

app.get('/sitemap-en2kannada4.xml', async function(req, res, next){
  res.set('Content-Type', 'text/xml')
  res.sendFile(__dirname + '/public/sitemaps/en2kannada_sitemap4.xml');
})

// English to Odia sitemaps
app.get('/sitemap-en2odia1.xml', async function(req, res, next){
  res.set('Content-Type', 'text/xml')
  res.sendFile(__dirname + '/public/sitemaps/en2odia_sitemap1.xml');
})

app.get('/sitemap-en2odia2.xml', async function(req, res, next){
  res.set('Content-Type', 'text/xml')
  res.sendFile(__dirname + '/public/sitemaps/en2odia_sitemap2.xml');
})

app.get('/sitemap-en2odia3.xml', async function(req, res, next){
  res.set('Content-Type', 'text/xml')
  res.sendFile(__dirname + '/public/sitemaps/en2odia_sitemap3.xml');
})

app.get('/sitemap-en2odia4.xml', async function(req, res, next){
  res.set('Content-Type', 'text/xml')
  res.sendFile(__dirname + '/public/sitemaps/en2odia_sitemap4.xml');
})


// English to Punjabi sitemaps
app.get('/sitemap-en2punjabi1.xml', async function(req, res, next){
  res.set('Content-Type', 'text/xml')
  res.sendFile(__dirname + '/public/sitemaps/en2punjabi_sitemap1.xml');
})
app.get('/sitemap-en2punjabi2.xml', async function(req, res, next){
  res.set('Content-Type', 'text/xml')
  res.sendFile(__dirname + '/public/sitemaps/en2punjabi_sitemap2.xml');
})
app.get('/sitemap-en2punjabi3.xml', async function(req, res, next){
  res.set('Content-Type', 'text/xml')
  res.sendFile(__dirname + '/public/sitemaps/en2punjabi_sitemap3.xml');
})
app.get('/sitemap-en2punjabi4.xml', async function(req, res, next){
  res.set('Content-Type', 'text/xml')
  res.sendFile(__dirname + '/public/sitemaps/en2punjabi_sitemap4.xml');
})

// full form sitemaps

app.get('/sitemap-fullform1.xml', async function(req, res, next){
  res.set('Content-Type', 'text/xml')
  res.sendFile(__dirname + '/public/sitemaps/sitemap-fullform1.xml');
})

app.get('/sitemap-fullform2.xml', async function(req, res, next){
  res.set('Content-Type', 'text/xml')
  res.sendFile(__dirname + '/public/sitemaps/sitemap-fullform2.xml');
})

app.get('/sitemap-fullform3.xml', async function(req, res, next){
  res.set('Content-Type', 'text/xml')
  res.sendFile(__dirname + '/public/sitemaps/sitemap-fullform3.xml');
})

app.get('/sitemap-fullform4.xml', async function(req, res, next){
  res.set('Content-Type', 'text/xml')
  res.sendFile(__dirname + '/public/sitemaps/sitemap-fullform4.xml');
})

app.get('/sitemap-fullform5.xml', async function(req, res, next){
  res.set('Content-Type', 'text/xml')
  res.sendFile(__dirname + '/public/sitemaps/sitemap-fullform5.xml');
})










app.use('/robots.txt', function (req, res, next) {
  res.type('text/plain')
  res.send("User-agent: *\nDisallow: /admin/\nDisallow: /login/\nDisallow: /logout/");
});



// 404 not found pages --- keen bottom of the page this section-------------
app.use(function(req, res, next) {
  let queryparm = req.query.query
  if (queryparm) {
     return res.redirect(`/meaning-in-hindi/${queryparm}`);
  }
  res.status(404);
  // respond with html page
  if (req.accepts('html')) {
    res.render('meaning-in-hindi/not_found', { url: req.url });
    return;
  }

});
app.listen(4000)