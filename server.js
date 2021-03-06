const express = require("express");
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const fileUpload = require('express-fileupload');
const session = require('express-session');
require('dotenv').config({path: 'config/keys.env'})

//import your router objects
const catalogueController = require("./controllers/Catalogue");
const generalController = require("./controllers/General");
const userController = require("./controllers/User");
const cartController = require("./controllers/Cart");

const app = express();
app.use(express.static('public'))
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded()); app.use(bodyParser.json());

app.engine("handlebars",exphbs(
    {
        helpers:
        {
            isSelected: function(value, category)
            {
                return value === category ? 'selected' : '';
            },

            isRental: function(orderType, id)
            {
                if(orderType === "Rental")
                {
                    linkPath = href="/cart/add-rent/" + id;
                }
                else
                {
                    linkPath = href="/cart/add-purchase/" + id;
                }
                return linkPath;
            }
        }

    }
));

app.use((req,res,next)=>{
    if(req.query.method == "PUT")
    {
        req.method="PUT"
    }
    else if(req.query.method == "DELETE")
    {
        req.method="DELETE"
    }
    next();
})

app.use(fileUpload());

app.use(session({
    secret: `${process.env.SECRET_KEY}`,
    resave: false,
    saveUninitialized: true,
}))

app.use((req,res,next)=>{
    res.locals.user = req.session.userInfo;
    next();
})

app.use("/", generalController);
app.use("/user/", userController);
app.use("/catalogue", catalogueController);
app.use("/cart", cartController);

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

