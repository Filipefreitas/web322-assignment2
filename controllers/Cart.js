const express = require('express');
const { isValidObjectId } = require('mongoose');
const router = express.Router();
const catalogueModel = require("../models/Catalogue");
const userModel = require("../models/User");
const orderModel = require("../models/Order");
const isAuthenticated = require("../middleware/authentication");
const Cart = require('../models/Cart');

router.get('/add-rent/:id', isAuthenticated, (req, res) =>
{
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});
  catalogueModel.findById(productId)
  .then((item)=>{
    const {_id, title, orderType = "Rental", rentPrice} = item;
    price = rentPrice;
    cart.add(productId, title, orderType, price);
    req.session.cart = cart;
    res.redirect('/cart/cart');
  })
  .catch(err=>console.log(`Error happened when adding (rent) to the cart :${err}`));
})

router.get('/add-purchase/:id', isAuthenticated, (req, res) =>
{
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});
  catalogueModel.findById(productId)
  .then((item)=>{
    const {_id, title, orderType = "Purchase", purchasePrice} = item;
    price = purchasePrice;
    cart.add(productId, title, orderType, price);
    req.session.cart = cart;
    res.redirect('/cart/cart');
  })
  .catch(err=>console.log(`Error happened when adding (purchase) to the cart :${err}`));
})

router.post("/confirmation", isAuthenticated, (req, res, next) =>{
  var cart = new Cart(req.session.cart);
  products = cart.getItems();
  itemsOrdered = products.length;
  
  //get user Id
  userModel.findOne({emailAddress: userEmail})
  .then((userIn)=>{
    const userId = userIn._id
    
    for(let i = 0; i < itemsOrdered; i++)
    {
      newItemOrder =
      {  
        userId: userId
        , orderDetail:
          {
            itemId: products[i].id
            , orderListPrice: products[i].price
            , orderTitle: products[i].title
            , orderQuantity: products[i].quantity
            , orderType:  products[i].orderType
          }
      } 
      const order = orderModel(newItemOrder);
      order.save()
      .then(()=>{
        next();
      })
      .catch(err=>console.log(`Error while creating order ${err}`));
    }
  })            
  .catch(err=>console.log(`Error while getting userId ${err}`));

  req.session.cart = "";
  res.redirect('/cart/order/confirmation');
})

router.get('/order/confirmation', isAuthenticated, (req, res) => {
  
  res.render("Order/orderConfirmation", {
    pageId: "orderConfirmation"
    , title: "Vudu - Order Confirmed"
  })
})

router.get('/cart', (req, res) => {
  if (!req.session.cart) {
    return res.render('Order/cart', {
      products: null
    });
  }

  var cart = new Cart(req.session.cart);
  res.render('Order/cart', {
    title: 'VUDU - Cart',
    products: cart.getItems()
    , total: cart.total
  });

});
  
router.get('/remove/:id', (req, res) => {
  var productId = req.params._id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});

  cart.remove(productId);
  req.session.cart = cart;
  res.redirect('/cart');
});

module.exports=router;
