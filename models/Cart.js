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
        this.total += cartItem.subTotal;
    };

    this.remove = function(id) 
    {
        this.totalItems -= this.items[id].quantity;
        this.totalPrice -= this.items[id].price;
        delete this.items[id];
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