const express = require("express");
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const fakeDB = require("./model/FakeDB.js");
const app = express();
app.use(express.static('public'))
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({ extended: false }))
require('dotenv').config({ path: 'config/keys.env' })


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
        res.render("registration", {
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
        .then(() => {
            console.log('Email sent')
        })
        .catch((error) => {
            console.error(error)
        })
        
        //redirect to dashboard 
        res.render("dashboard",{
            pageId: "dashboard"
            , title: "Vudu - Welcome"
        })
    }
})

app.get("/login", (req,res)=>{
    res.render("login",{
        pageId: "login"
        , title: "Vudu - Login"
    })
})

app.post("/login", (req,res)=>{
    const errors = 
    {
        "mEmailPasswordErrorLabel": ""
        , "mFormErrors": ""  
    };
    var emailAddress = req.body.emailAddress;
    var password = req.body.password;
    var hasErrors = false;
    const checkEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(emailAddress == "" || !checkEmail.test(emailAddress))
    {
        errors.mEmailPasswordErrorLabel = `This email is not valid`;
        hasErrors = true;
    }
    else if (password == "")
    {
        errors.mEmailPasswordErrorLabel = `Please enter a password`;
        hasErrors = true;
    }

    if(hasErrors == true)
    {
        errors.mFormErrors = "Your form contain errors. Please check it out";
        res.render("login", {
            title: "Vudu - Login"
            , errorMessages: errors 
            , loginForm: 
            {
                emailAddress: emailAddress
                , password: password
            }  
        })
    }
    else
    {
        res.render("dashboard", {
            pageId: "dashboard"
            , title: "Vudu - Dashboard"
        })
    }
})

const PORT = process.env.PORT || 4000;
app.listen(`${PORT}`, ()=>
{
    console.log(`web server is up and running on PORT ${PORT}`);
})

