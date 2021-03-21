const express = require("express");
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail');
const mongoose = require('mongoose');
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const fakeDB = require("./models/FakeDB.js");
const userModel = require("../Assignment_2/models/User");

const app = express();
require('dotenv').config({path: 'config/keys.env'})
app.use(express.static('public'))
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({ extended: false }))

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

app.get("/login", (req,res)=>{
    res.render("login",{
        pageId: "login"
        , title: "Vudu - Login"
    })
})

app.get("/catalogue",(req,res)=> {
     res.render("catalogue", {
        pageId: "catalogue"
         , title: "Vudu - Movies"
         , products: fakeDB.getAllProducts()
     })
 })

app.get("/catalogue/:id", (req,res)=>{
    res.render("catalogueDetails",{
        pageId: "catalogueDetails"
        , product: fakeDB.getaProduct(req.params.id)
        , title: fakeDB.getTitle(req.params.id)
    })
})

//Route to direct use to Registration form
app.get("/register",(req,res)=>
{
    res.render("register",{
        pageId: "register"
        , title: "Vudu - New User"
    })
});

//Route to process user's request and data when user submits registration form
app.post("/register",(req,res)=>
{ 
    const errors = 
    {
        "mNameErrorLabel": ""
        , "mEmailPasswordErrorLabel": ""
        , "mFormErrors": ""  
    };
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var emailAddress = req.body.emailAddress;
    var password = req.body.password;

    const verifiedSender = 'fda-cunha-de-freitas@myseneca.ca';
    const minLengthName = 2;
    const maxLengthName = 30;
    const minLengthPass = 6;
    const maxLengthPass = 12;
    const checkEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const checkPassword = /^[a-zA-Z0-9_.-]*$/;
    var hasErrors = false;

    if(firstName.length < `${minLengthName}` || firstName.length > `${maxLengthName}`)
    {
        errors.mNameErrorLabel = `First name must be between ${minLengthName} and ${maxLengthName} characters long`;
        hasErrors = true;
    }
    else if (lastName.length < `${minLengthName}` || lastName.length > `${maxLengthName}`)
    {
        errors.mNameErrorLabel = `Last name must be between ${minLengthName} and ${maxLengthName} characters long`;
        hasErrors = true;
    }
    
    //Email address check
    if(emailAddress.length == "")
    {
        errors.mEmailPasswordErrorLabel = `Please enter your email address`;
        hasErrors = true;
    }
    else if(!checkEmail.test(emailAddress))
    {
        errors.mEmailPasswordErrorLabel = `Please enter a valid email address`;
        hasErrors = true;    
    }
    //Password check
    else if(password.length < `${minLengthPass}` || password.length > `${maxLengthPass}`)
    {
        errors.mEmailPasswordErrorLabel = `Password has to be between ${minLengthPass} and ${maxLengthPass} characters long`;
        hasErrors = true;
    }
    else if(!checkPassword.test(password))
    {
        errors.mEmailPasswordErrorLabel = `Password must contain letters and numbers only`;
        hasErrors = true;    
    }

    if(hasErrors == true)
    {
        errors.mFormErrors = "Your form contain errors. Please check it out";
        res.render("register", 
        {
            title: "registration page"
            , errorMessages: errors 
            , registrationForm: 
            {
                firstName: firstName
                , lastName: lastName
                , emailAddress: emailAddress
                , password: password
            }  
        })
    }
    else
    {
        //if no errors, then create a new user
        const newUser = 
        {
            firstName : req.body.firstName
            , lastName: req.body.lastName
            , emailAddress: req.body.emailAddress
            , password: req.body.password
        }
    
        const user = userModel(newUser);
        user.save()
        .then(()=>{
            res.redirect(`/dashboard/${user._id}`)
        })
        .catch(err=>console.log(`Error while creating new user ${err}`));
    
        //send confirmation email
        sgMail.setApiKey(process.env.SENDGRID_API_KEY)
        const msg =
        {
            to: `${emailAddress}`,
            from: `${verifiedSender}`,
            subject: 'Your Vudu Account Is Now Live',
            text: 'and easy to do anywhere, even with Node.js',
            html: '<h1>You are now one of us</h1>',
        }
        sgMail
        .send(msg)
        .then(() => 
        {
            console.log('Email sent')
        })
        .catch((error) => 
        {
            console.error(error)
        })        
    }
})

mongoose.connect(process.env.MONGO_DB_CONNECTION_STRING, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log(`Connected to MongoDB Database`)
})
.catch(err=>console.log(`Error occured when connecting to database ${err}`));

const PORT = process.env.PORT;
app.listen(`${PORT}`, ()=>
{
    console.log(`web server is up and running on PORT ${PORT}`);
})

