const express = require('express')
const router = express.Router();
const fakeDB = require("../models/FakeDB.js");
const catalogueModel = require("../models/Catalogue");
const isAuthenticated = require("../middleware/authentication");
const checkRoleAddProduct = require("../middleware/authorization");

//Route to direct user to home page
router.get("/catalogue",(req,res)=> {
    res.render("Catalogue/catalogue", {
       pageId: "catalogue"
        , title: "Vudu - Movies"
        , products: fakeDB.getAllProducts()
    })
})

router.get("/catalogue/:id", (req,res)=>{
   res.render("Catalogue/catalogueDetails",{
       pageId: "catalogueDetails"
       , product: fakeDB.getaProduct(req.params.id)
       , title: fakeDB.getTitle(req.params.id)
   })
})

router.get("/add",isAuthenticated, checkRoleAddProduct, (req,res)=>{
    res.render("Catalogue/addProducts",{
        pageId: "catalogueAdd"
        , title: "Vudu Admin - Add Movie"
    })
 })
 
 router.post("/add", (req,res)=>
 {
    const productAddedMsg = 
    {
        "mAddedMessage": ""
    }

    const errors = 
    {
        "mTitle": ""
        , "mGender": ""
        , "mYear": ""
        , "mCategory": ""
        , "mGender": ""
        , "mSrcImg": ""
        , "mAlt": ""
        , "mBackImg": ""
        , "mStars": ""
        , "mRating": ""
        , "mDescription": ""
        , "mTrailer": ""
        , "mRentPrice": ""
        , "mPurchasePrice": ""
        , "mFeatured": ""
        , "mFavorite": ""
        , "mFormErrors": ""  
    };

    var title = req.body.title;
    var gender = req.body.gender;
    var year = req.body.year;
    var category = req.body.category;
    var srcImg = req.body.srcImg;
    var alt = req.body.alt;
    var backImg = req.body.backImg;
    var stars = req.body.stars;
    var rating = req.body.rating;
    var description = req.body.description;
    var trailer = req.body.trailer;
    var rentPrice = req.body.rentPrice;
    var purchasePrice = req.body.purchasePrice;
    var featured = req.body.featured;
    var favorite = req.body.favorite;
    var hasErrors = false;

    if(title.length == "")
    {
        errors.mTitle = `Please add the title`;
        hasErrors = true;
    }

    if(gender.length == "")
    {
        errors.mGender = `Please add the gender`;
        hasErrors = true;
    }

    if(year.length == "")
    {
        errors.mYear = `Please add the year`;
        hasErrors = true;
    }

    /*
    if(category = "placeholder")
    {
        errors.mCategory = `Please select a category`;
        hasErrors = true;
    }
    
    if(srcImg.length == "")
    {
        errors.mSrcImg  = `Please add a source image`;
        hasErrors = true;
    }
    */ 

    if(alt.length == "")
    {
        errors.mAlt = `Please add the alt description`;
        hasErrors = true;
    }

    /*
    if(bckImg.length == "")
    {
        errors.mBckImg = `Please add a background image for the product page`;
        hasErrors = true;
    }
    */ 

    if(stars.length == "")
    {
        errors.mStars = `Please add the stars`;
        hasErrors = true;
    }

    if(rating.length == "")
    {
        errors.mRating = `Please add the rating`;
        hasErrors = true;
    }

    if(description.length == "")
    {
        errors.mDescription = `Please add a description`;
        hasErrors = true;
    }

    if(trailer.length == "")
    {
        errors.mTrailer = `Please add a link to the trailer`;
        hasErrors = true;
    }

    if(rentPrice.length == "")
    {
        errors.mRentPrice = `Please add the rent price`;
        hasErrors = true;
    }

    if(purchasePrice.length == "")
    {
        errors.mPurchasePrice = `Please add the purchase price`;
        hasErrors = true;
    }

    if(featured == "placeholder")
    {
        errors.mFeatured = `Please inform if it is a featured movie`;
        hasErrors = true;
    }

    if(favorite == "placeholder")
    {
        errors.mFavorite = `Please inform if it is a favorite movie`;
        hasErrors = true;
    }

    if(hasErrors)
    {
        mFormErrors = "Your form contain errors. Please check it out";
        res.render("Catalogue/addProducts", 
        {
            title: "Vudu Admin - Add Movie"
            , errorMessages: errors 
            , registrationForm: 
            {
                //added load previous filled data to reload form
            }  
        })
    }
    else
    {
        mAddedMessage = "Your product has been successfully added to the database";
        const newProduct = 
        {
            title : req.body.title
            , gender: req.body.gender
            , year: req.body.year
            , category: req.body.category
            , srcImg: req.body.srcImg
            , alt: req.body.alt
            , backImg: req.body.backImg
            , director: req.body.director
            , creators: req.body.creators
            , writers: req.body.writers
            , stars: req.body.stars
            , rating: req.body.rating
            , description: req.body.description
            , trailer: req.body.trailer
            , rentPrice: req.body.rentPrice
            , purchasePrice: req.body.purchasePrice
            , featured: req.body.featured
            , favorite: req.body.favorite
        }
        
        const product = catalogueModel(newProduct);
        product.save()
        .then(()=>{
            console.log('here');
            console.log(mAddedMessage);
            res.render(`Catalogue/addProducts`,{
                title: "Vudu Admin - Add Movie"
                , successMessage: productAddedMsg
            })
        })
        .catch(err=>console.log(`Error while adding a product to the database ${err}`));
    }
 })

module.exports=router;
