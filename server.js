const express = require("express");
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userModel = require("../Assignment_2/models/User");
const fakeDB = require("./models/FakeDB.js");
const fileUpload = require('express-fileupload');
const session = require('express-session');
require('dotenv').config({path: 'config/keys.env'})

//import your router objects
const catalogueController = require("./controllers/Catalogue");
const generalController = require("./controllers/General");
const userController = require("./controllers/User");

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
    res.locals.user= req.session.userInfo;
    next();
})

app.use("/", generalController);
app.use("/user/", userController);
app.use("/catalogue", catalogueController);

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

