const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//This indicates the shape of the documents that will be entering the database
const orderSchema = new Schema(
{
    userId:
    {
        type: String
        , required: true        
    }
    , orderDetail:
    {
        orderItem:
        {
            type: String
            , required: true        
        } 
        , orderListPrice:  
        {
            type: Number
            , required: true        
        }
        , orderQuantity:  
        {
            type: Number
            , required: true        
        }
    }
    , dateCreated:
    {
        type: Date
        , default: Date.now()        
    }

});

const orderModel = mongoose.model('Order', orderSchema);

module.exports = orderModel;
