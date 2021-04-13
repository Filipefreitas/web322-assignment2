const express = require('express')
const router = express.Router();
const fakeDB = require("../models/FakeDB.js");
const catalogueModel = require("../models/Catalogue");

//Route to direct user to home page
router.get("/",(req,res)=> 
{
    catalogueModel.find({category: "movie", featured: "True"})
    .then((products)=>{
            const favouriteProducts = products.map(product=>{
            return {
            id: product._id
            , title: product.title
            , gender: product.gender
            , year: product.year
            , category: product.category
            , alt: product.alt
            , director: product.director
            , stars: product.stars
            , src: product.srcImg
            , rating: product.rating
            , writers: product.writers
            , stars: product.stars
            , rating: product.rating
            , description: product.description
            , rentPrice: product.rentPrice
            , purchasePrice: product.purchasePrice
        }
    });
    
    res.render("General/index", {
            pageId: "index"
            , title: "Vudu - Home Page"
            , featuredMovies: favouriteProducts
            //, featuredMovies: fakeDB.getFeaturedMovies()
            //, featuredSeries: fakeDB.getFeaturedSerie()
            //, favoriteMovies: fakeDB.getFavoriteMovies()
        });
    })
    .catch(err=>console.log(`Error happened when pulling from the database :${err}`));
})

module.exports=router;
