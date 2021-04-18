const express = require('express');
const { isValidObjectId } = require('mongoose');
const router = express.Router();
const userModel = require("../models/User");
const bcrypt = require('bcryptjs');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const isAuthenticated = require("../middleware/authentication");
const dashboardLoader = require("../middleware/authorization");
const checkUniqueuser = require("../middleware/uniqueUser");

//Route to direct use to Registration form
router.get("/register",(req,res)=>
{
    res.render("User/register",{
        pageId: "register"
        , title: "Vudu - New User"
    })    
})

//Route to process user's request and data when user submits registration form
router.post("/register",checkUniqueuser, (req,res)=>
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
    else if(lastName.length < `${minLengthName}` || lastName.length > `${maxLengthName}`)
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
    if(password.length < `${minLengthPass}` || password.length > `${maxLengthPass}`)
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
        res.render("User/register", 
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
            res.redirect(`/user/login`)
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

//Route to direct user to the login form
router.get("/login", (req,res)=>{
    res.render("User/login",{
        pageId: "login"
        , title: "Vudu - Login"
    })
})

router.post("/login", (req,res)=>{
    userModel.findOne({emailAddress:req.body.emailAddress})
    .then(user=>{
        const errors = [];

        if(user==null)
        {
            errors.push("Sorry, your email and/or password is incorrect");
            res.render("User/login", {
                errors
            })
        }
        else
        {
            bcrypt.compare(req.body.password, user.password)
            .then(isMatched=>{
                if(isMatched)
                {
                    req.session.userInfo = user;
                    userEmail = req.body.emailAddress;
                    res.redirect("/user/profile");
                }
                else
                {   
                    errors.push("Sorry, your email and/or password is incorrect");
                    res.render("User/login", {
                        errors
                    })
                }
            })
            .catch(err=>console.log(`Error ${err}`))
        }
    })
    .catch(err=>console.log(`Error ${err}`)); 
})

router.get("/profile",isAuthenticated,dashboardLoader);

router.get("/logout",(req,res)=>
{
    req.session.destroy();
    res.redirect("/user/login");
})

module.exports=router;
