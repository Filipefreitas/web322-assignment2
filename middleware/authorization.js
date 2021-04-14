const catalogueModel = require("../models/Catalogue");

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
                pageId: "catalogue"
                , title: "Vudu - Admin Dashboard"
                , data: filteredProduct
            })            
        })
        .catch(err=>console.log(`Error happened when pulling from the database :${err}`));
        
    }
    else
    {
        res.render("User/userDashboard");

    }
}

module.exports = dashboardLoader;