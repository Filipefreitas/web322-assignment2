const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

//This indicates the shape of the documents that will be entering the database
const productSchema = new Schema(
{
    title: 
    {
        type: String
        , required: true
    }
    , gender:
    {
        type: String
        , required: true
    } 
    , year:
    {
        type: String
        , required: true

    } 
    , category:
    {
        type: String
        , required: true
    }
    , srcImg: 
    {
        type: String
        , required: false
    }
    , alt:
    {
        type: String
        , required: true
    }
    , backImg:
    {
        type: String
        , required: false
    }
    , director:
    {
        type: String
        , required: false
    }
    , creators:
    {
        type: String
        , required: false
    }
    , writers:
    {
        type: String
        , required: false
    }
    , stars:
    {
        type: String
        , required: true
    }
    , rating:
    {
        type: Number
        , required: true
    }
    , description: 
    {
        type: String
        , required: true
    }
    , trailer: 
    {
        type: String
        , required: true
    }
    , rentPrice:
    {
        type: Number
        , required: false
    }
    , purchasePrice: 
    {
        type: Number
        , required: false
    }
    , featured:
    {
        type: String
        , required: true
    }
    , favorite:
    {
        type: String
        , required: true
    }
    , dateCreated:
    {
        type: Date
        , default: Date.now()        
    }
});

const catalogueModel = mongoose.model('Product', productSchema);

module.exports = catalogueModel;
