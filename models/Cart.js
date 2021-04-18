//following the logic found in https://github.com/gtsopour/nodejs-shopping-cart
module.exports = function Cart(cart) 
{
    this.items = cart.items || {};
    this.totalItems = cart.totalItems || 0;
    this.totalPrice = cart.totalPrice || 0;
    this.total = cart.total || 0;

    this.add = function(id, title, orderType, price) 
    {
        var cartItem = this.items[id];
        if (!cartItem) 
        {
            cartItem = this.items[id] = {id: id, title: title, orderType: orderType, quantity: 0, price: 0};
        }
        cartItem.quantity++;
        cartItem.price = price;
        cartItem.subTotal = cartItem.price * cartItem.quantity;
        this.total += cartItem.price;
    };

    this.remove = function(id) 
    {
        var cartItem = this.items[id];
        if(cartItem.quantity == 1)
        {
            cartItem.subTotal = 0;
            cartItem.total = 0;
            delete this.items[id];
        }
        else
        {
            cartItem.quantity--;
            cartItem.subTotal = cartItem.price * cartItem.quantity;
        }
        
        this.total -= cartItem.price;
    };
    
    this.getItems = function() 
    {
        var arr = [];
        for (var id in this.items) 
        {
            arr.push(this.items[id]);
        }
        return arr;
    }
};