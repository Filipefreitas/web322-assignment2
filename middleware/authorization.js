const dashboardLoader = (req, res)=>
{
    if (req.session.userInfo.admin == true)
    {
        res.render("User/adminDashboard");
    }
    else
    {
        res.render("User/userDashboard");
    }
}

module.exports = dashboardLoader;