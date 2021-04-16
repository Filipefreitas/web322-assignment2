const express = require('express')
const router = express.Router();
const catalogueModel = require("../models/Catalogue");

//Route to direct user to home page
router.get("/",(req,res)=> 
{
    catalogueModel.find({category: "movie", featured: "True"})
    .then((featMovies)=>{
            const featuredMovies = featMovies.map(featMovie=>{
            return {
                id: featMovie._id
                , title: featMovie.title
                , gender: featMovie.gender
                , year: featMovie.year
                , category: featMovie.category
                , alt: featMovie.alt
                , director: featMovie.director
                , stars: featMovie.stars
                , src: featMovie.srcImg
                , rating: featMovie.rating
                , writers: featMovie.writers
                , stars: featMovie.stars
                , rating: featMovie.rating
                , description: featMovie.description
                , rentPrice: featMovie.rentPrice
                , purchasePrice: featMovie.purchasePrice
            }
        });

    catalogueModel.find({category: "serie", featured: "True"})
    .then((featSeries)=>{
            const featuredSeries = featSeries.map(featSerie=>{
            return {
                id: featSerie._id
                , title: featSerie.title
                , gender: featSerie.gender
                , year: featSerie.year
                , category: featSerie.category
                , alt: featSerie.alt
                , director: featSerie.director
                , stars: featSerie.stars
                , src: featSerie.srcImg
                , rating: featSerie.rating
                , writers: featSerie.writers
                , stars: featSerie.stars
                , rating: featSerie.rating
                , description: featSerie.description
                , rentPrice: featSerie.rentPrice
                , purchasePrice: featSerie.purchasePrice
            }
        });

        catalogueModel.find({category: "movie", favorite: "True"})
        .then((favMovies)=>{
                const favouriteMovies = favMovies.map(favMovie=>{
                return {
                    id: favMovie._id
                    , title: favMovie.title
                    , gender: favMovie.gender
                    , year: favMovie.year
                    , category: favMovie.category
                    , alt: favMovie.alt
                    , director: favMovie.director
                    , stars: favMovie.stars
                    , src: favMovie.srcImg
                    , rating: favMovie.rating
                    , writers: favMovie.writers
                    , stars: favMovie.stars
                    , rating: favMovie.rating
                    , description: favMovie.description
                    , rentPrice: favMovie.rentPrice
                    , purchasePrice: favMovie.purchasePrice
                }
            });

        res.render("General/index", {
                pageId: "index"
                , title: "Vudu - Home Page"
                , featuredMovies: featuredMovies
                , featuredSeries: featuredSeries
                , favoriteMovies: favouriteMovies
            });
        })
        .catch(err=>console.log(`Error happened when pulling from the database :${err}`));
        });        
    });        
})

module.exports=router;
