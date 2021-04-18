const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema(
{
    userId:
    {
        type: String
        , required: true        
    }
    , orderDetail:
    {
        itemId:
        {
            type: String
            , required: true        
        } 
        , orderTitle:  
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
        , orderType: 
        {
            type: String
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
