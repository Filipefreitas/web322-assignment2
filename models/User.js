const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

//This indicates the shape of the documents that will be entering the database
const userSchema = new Schema(
{
    firstName:
    {
        type: String
        , required: true        
    }
    , lastName:
    {
        type: String
        , required: true        
    }    
    , emailAddress:
    {
        type: String
        , required: true
        /*
        , validate: 
        {
            validator: async function(emailAddress) 
            {
              const user = await this.constructor.findOne({ emailAddress });
              if(user) 
              {
                if(this.id === user.id) 
                {
                  return true;
                }
                return false;
              }
              return true;
            },
            message: props => 'The specified email address is already in use.'
        },
        required: [true, 'User email required']
        */
    }
    , password:
    {
        type: String
        , required: true        

    }    
    , dateCreated:
    {
        type: Date
        , default: Date.now()        
    }
});

userSchema.pre("save", function(next)
{
    bcrypt.genSalt(10)
    .then((salt)=>
    {
        bcrypt.hash(this.password, salt)
        .then((encryptedPassword)=>
        {
            this.password = encryptedPassword;
            next();
        })
        .catch(err=>console.log(`Error occured when hashing ${err}`));        
    })
    .catch(err=>console.log(`Error occured when salting ${err}`));
});

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
