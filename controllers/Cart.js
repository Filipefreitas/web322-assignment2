const express = require('express');
const { isValidObjectId } = require('mongoose');
const router = express.Router();
const catalogueModel = require("../models/Catalogue");
const userModel = require("../models/User");
const orderModel = require("../models/Order");
const bcrypt = require('bcryptjs');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const isAuthenticated = require("../middleware/authentication");

const Cart = require('../models/Cart');

router.get('/add-rent/:id', function(req, res, next) 
{
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});
  catalogueModel.findById(productId)
  .then((item)=>{
    const {_id, rentPrice} = item;
    price = rentPrice;
    cart.add(productId, price);
    req.session.cart = cart;
    console.log(2);
    console.log(cart);
    res.redirect("/");
  })
  .catch(err=>console.log(`Error happened when adding (rent) to the cart :${err}`));
})
  
router.get('/add-purchase/:id', function(req, res, next) 
{
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});

  catalogueModel.findById(productId)
  .then((product)=>{
      const {_id, purchasePrice} = product;
      price = purchasePrice;
      cart.add(_id, price);
      req.session.cart = cart;
      console.log(cart);
      res.redirect("/");
  })
  .catch(err=>console.log(`Error happened when adding (purchase) to the cart :${err}`));
})

router.get('/cart', function(req, res, next) {
  if (!req.session.cart) {
    return res.render('Order/cart', {
      products: null
    });
  }

  var cart = new Cart(req.session.cart);
  res.render('Order/cart', {
    title: 'VUDU - Cart',
    products: cart.getItems()
    //totalPrice: cart.totalPrice
  });

});
  
router.get('/remove/:id', function(req, res, next) {
  var productId = req.params._id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});

  cart.remove(productId);
  req.session.cart = cart;
  res.redirect('/cart');
});

module.exports=router;
