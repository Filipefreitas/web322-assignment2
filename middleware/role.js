const checkRoleAddProduct = (req, res)=>
{
    if (req.session.userInfo.admin == true)
    {
        res.render("Catalogue/addProducts");
    }
    else
    {
        res.render("User/userDashboard");
    }
}

module.exports = checkRoleAddProduct;