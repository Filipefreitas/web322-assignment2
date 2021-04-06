const express = require("express");
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const fakeDB = require("./models/FakeDB.js");
const userModel = require("../Assignment_2/models/User");
const session = require('express-session');
const bcrypt = require('bcryptjs');

//import your router objects
const catalogueController = require("./controllers/Catalogue");
const generalController = require("./controllers/General");
const userController = require("./controllers/User");

const app = express();
require('dotenv').config({path: 'config/keys.env'})
app.use(express.static('public'))
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({ extended: false }));

app.use(session({
    secret: `${process.env.SECRET_KEY}`,
    resave: false,
    saveUninitialized: true,
}))

app.use((req,res,next)=>{
    res.locals.user= req.session.userInfo;
    next();
})

app.use("/", generalController);
app.use("/user/", userController);
app.use("/catalogue", catalogueController);
/*
app.use("/",(req,res)=>{
    res.render("General/404");
});
*/

/*
app.engine("handlebars",exphbs(
    {
        helpers:
        {
            isAdmin: function(role)
            {
                return role === 'Admin';
            }
        }
    }
));
*/

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

