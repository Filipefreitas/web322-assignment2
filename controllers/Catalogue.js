/*
const express = require('express')
const router = express.Router();
const fakeDB = require("./models/FakeDB.js");

//Route to direct user to home page
router.get("/catalogue",(req,res)=> {
    res.render("catalogue", {
       pageId: "catalogue"
        , title: "Vudu - Movies"
        , products: fakeDB.getAllProducts()
    })
})

router.get("/catalogue/:id", (req,res)=>{
   res.render("catalogueDetails",{
       pageId: "catalogueDetails"
       //, product: fakeDB.getaProduct(req.params.id)
       //, title: fakeDB.getTitle(req.params.id)
   })
})

module.exports=router;
*/