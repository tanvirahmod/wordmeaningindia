const knex = require("./knex");

// Functions for English to Bengali -----------------------------------------------
function createWord(word) {
    return knex("eng2bn").insert(word);
}

function getAllWords() {
    return knex("eng2bn").select("*");
}
// for English to Hindi
function getOne(input) {
    return knex("en2hin").where("word", input).first();
}

function deleteWord(id) {
    return knex("eng2bn").where("id", id).del();
}

function updateWord(id,word) {
    return knex("eng2bn").where("id", id).update(word);
}


// Functions for Bengali to Bengali -------------------------------------------
function getAllB2B() {
    return knex("bn2bn").select("*");
}

function getOneB2B(input) {
    return knex("bn2bn").where("word", input).first();
    // return knex("bn2bn").where("bn_word", 'like', `%${input}%`).select("*");
}





// Functions for Hindi to English -------------------------------------------
function getAllH2E() {
    return knex("hin2eng").select("*");
}

function getOneH2E(input) {
    return knex("hin2eng").where("word", input).first();
    // return knex("bn2bn").where("bn_word", 'like', `%${input}%`).select("*");
}


// Hindi to French ----------------------------
function getOneH2fr(input) {
    return knex("hin2fr").where("word", input).first();
    // return knex("bn2bn").where("bn_word", 'like', `%${input}%`).select("*");
}



// for English to Tamil -----------------------
function getTamil(input) {
    return knex("en2tam").where("word", input).first();
}





// partial table ---------------------------------------------------------------
function getPartial(input) {
    return knex("partials_table").where("word", input).first();
}

// english to telugu --------------------------------
function getTelugu(input) {
    return knex("en2telugu").where("word", input).first();
}


// english to marathi --------------------------------
function getMarathi(input) {
    return knex("en2marathi").where("word", input).first();
}

// english to gujarati --------------------------------
function getGujarati(input) {
    return knex("en2gujarati").where("word", input).first();
}

// english to Kannada --------------------------------
function getKannada(input) {
    return knex("en2kannada").where("word", input).first();
}

// english to Odia --------------------------------
function getOdia(input) {
    return knex("en2odia").where("word", input).first();
}

// english to Punjabi --------------------------------
function getPunjabi(input) {
    return knex("en2punjabi").where("word", input).first();
}

// acronyms database...................................
function getAllAcronym(input) {
    return knex("acronymall").where("shortform", 'like', `${input}`);
}

function getOneAcronym(input) {
    return knex("acronymsingle").where("shortform", input).first();
}

// similer 
function getSimilerAcronym(id) {
    return knex("acronymsingle").whereIn('id', [id - 16, id - 15, id - 14, id - 13, id - 12, id - 11, id - 10, id - 9, id - 8, id - 7, id - 6, id - 5, id - 4, id - 3, id - 2, id - 1, id, id + 1, id + 2, id + 3, id + 4, id + 5, id + 6, id + 7, id + 8, id + 9, id + 10, id + 11, id + 12, id + 13, id + 14, id + 15, id + 16]).select("shortform");
}





module.exports = {
    // for english to bengali
    createWord,
    getAllWords,
    getOne,
    deleteWord,
    updateWord,
    // for bengali to bengali
    getAllB2B,
    getOneB2B,
    // getOneB2BContains
    // Bengali to English
    getAllH2E,
    getOneH2E,
    // English to Tamil -------
    getTamil,
    getOneH2fr,
    getPartial,
    getTelugu,
    getMarathi,
    getGujarati,
    getKannada,
    getOdia,
    getPunjabi,
    getAllAcronym,
    getOneAcronym,
    getSimilerAcronym
}