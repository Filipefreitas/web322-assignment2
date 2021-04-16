module.exports = function Cart(cart) 
{
    this.items = cart.items || {};
    //this.cartItem = cart.cartItem || {id: String, quantity: {type: Number, default: 1}, price: Number};
    //this.totalItems = cart.totalItems || 0;
    //this.totalPrice = cart.totalPrice || 0;

    this.add = function(id, price) 
    {
        var cartItem = this.items[id];
        console.log(0);
        console.log(cartItem);
        if (!cartItem) 
        {
            cartItem = this.items[id] = {id: id, quantity: 0, price: 0};
        }
        cartItem.quantity++;
        console.log(1); 
        console.log(cartItem);
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
        console.log('4. get cart items');
        console.log(arr);
        return arr;
    }
};