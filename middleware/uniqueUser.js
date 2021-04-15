const userModel = require("../models/User");

const checkUniqueuser = (req, res, next)=>
{
    var emailAddress = req.body.emailAddress;
    const errors = 
    {
        "mEmailPasswordErrorLabel": ""
        , "mFormErrors": ""  
    };

    userModel.findOne({emailAddress:emailAddress})
    .then((user)=>{
        if(user)
        {
            errors.mEmailPasswordErrorLabel = `Email address already taken`;
            errors.mFormErrors = `Your form contain errors. Please check it out`;
            res.render("User/register", {
                errorMessages: errors 
            })
        }
        else
        {
            next();
        }
    })
    .catch(err=>console.log(`Error ${err}`))
}

module.exports = checkUniqueuser;