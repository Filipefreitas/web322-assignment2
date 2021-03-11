const express = require("express");
const exphbs = require('express-handlebars');
const fakeDB = require("./model/FakeDB.js");
const app = express();
app.use(express.static('public'))
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

//routes
app.get("/",(req,res)=> {
    res.render("index", {
        pageId: "index"
        , title: "Vudu - Home Page"
        , featuredMovies: fakeDB.getFeaturedMovies()
        , featuredSeries: fakeDB.getFeaturedSerie()
        , favoriteMovies: fakeDB.getFavoriteMovies()
    })
})

app.get("/catalog",(req,res)=> {
     res.render("catalog", {
        pageId: "catalog"
         , title: "Vudu - Movies"
         , products: fakeDB.getAllProducts()
     })
 })

app.get("/catalog/:id", (req,res)=>{
    res.render("catalogDetails",{
        pageId: "catalogDetails"
        , product: fakeDB.getaProduct(req.params.id)
        , title: fakeDB.getTitle(req.params.id)
    })
})

app.get("/registration", (req,res)=>{
    res.render("registration",{
        pageId: "registration"
        , title: "Vudu - Registration"
    })
})

app.post("/registration", (req,res)=>{
    res.render("signup",{
        pageId: "signup"
        , title: "Vudu - Welcome"
    })
})

app.get("/login", (req,res)=>{
    res.render("login",{
        pageId: "login"
        , title: "Vudu - Login"
    })
})

app.post("/login", (req,res)=>{
    res.render("homeClient",{
        pageId: "homeClient"
        , title: "Vudu - User home"
    })
})

const PORT_NO = process.env.PORT || 4000;
app.listen(`${PORT_NO}`, ()=>
{
    console.log(`web server is up and running on PORT ${PORT_NO}`);
})