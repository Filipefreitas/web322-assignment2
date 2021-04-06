const express = require('express')
const router = express.Router();
const fakeDB = require("../models/FakeDB.js");

//Route to direct user to home page
router.get("/",(req,res)=> {
    res.render("General/index", {
        pageId: "index"
        , title: "Vudu - Home Page"
        , featuredMovies: fakeDB.getFeaturedMovies()
        , featuredSeries: fakeDB.getFeaturedSerie()
        , favoriteMovies: fakeDB.getFavoriteMovies()
    })
})

module.exports=router;
