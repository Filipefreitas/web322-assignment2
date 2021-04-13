const checkRoleAddProduct = (req, res)=>
{
    if (req.session.userInfo.admin == true)
    {
        res.render("Catalogue/addProducts",{
            pageId: "catalogueAdd"
            , title: "Vudu Admin - Add Movie"
        })
    }
    else
    {
        res.render("User/userDashboard");
    }
}

module.exports = checkRoleAddProduct;