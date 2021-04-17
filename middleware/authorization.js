const catalogueModel = require("../models/Catalogue");
const userModel = require("../models/User");
const orderModel = require("../models/Order");

const dashboardLoader = (req, res)=>
{
    if (req.session.userInfo.admin == true)
    {
        catalogueModel.find()
        .then((products)=>{
        const filteredProduct = products.map(product=>{
            return {
               id: product._id
                , title: product.title
                , gender: product.gender
                , year: product.year
                , director: product.director
                , creators: product.creators
                , writers: product.writers
                , stars: product.stars
                , rating: product.rating
                , description: product.description
                , trailer: product.trailer
                , rentPrice: product.rentPrice
                , purchasePrice: product.purchasePrice
            }
        });
                
        res.render("User/adminDashboard", {
                pageId: "adminDashboard"
                , title: "Vudu - Admin Dashboard"
                , data: filteredProduct
            })            
        })
        .catch(err=>console.log(`Error happened when pulling from the database :${err}`));
        
    }
    else
    {
        //regulat user Dashboard
        userModel.findOne({emailAddress: userEmail})
        .then((userIn)=>{
            const userId = userIn._id;
            //console.log(userId);

            //get Orders from this user
            orderModel.find({userId: userId})
            .then((orders)=>{
                const userOrders = orders.map(order=>{

                        /*
                                catalogueModel.findOne({_id: id})
        .then((product)=>{
            const productId = product._id;            
            return productId;
        });

                        */

                    return{
                        id: order._id
                        , itemId: order.orderDetail.itemId
                        , orderListPrice: order.orderDetail.orderListPrice
                        , orderQuantity: order.orderDetail.orderQuantity
                        , orderType: order.orderDetail.orderType
                        , subTotal: order.orderDetail.orderListPrice * order.orderDetail.orderQuantity
                    }            
                });

                res.render("User/userDashboard", {
                    pageId: "userDashboard"
                    , title: "Vudu - User Dashboard"
                    , orders: userOrders
                })
            })
            .catch(err=>console.log(`No orders found for this user ${err}`));

        })
        .catch(err=>console.log(`Error while getting userId ${err}`));
    }
}

module.exports = dashboardLoader;