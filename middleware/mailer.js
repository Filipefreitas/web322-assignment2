//following instructions found in https://medium.com/@arjunbastola/sending-emails-using-node-js-and-sendgrid-5ad4dea7cf44
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

templates = 
{
    vudu_order_confirmation: "d-196f4dfd078d4f9298c1acfaa8fece61"
}

function sendEmail(data) 
{
    const msg = {
       //email details
       to: data.receiver
       , from: 'fda-cunha-de-freitas@myseneca.ca'
       , templateId: templates[data.templateName]

       //custom fields 
       , dynamic_template_data: 
       {
            orderId: data.productId
            , orderTitle: data.orderTitle
            , orderType: data.orderType
            , price: data.price
            , quantity: data.quantity
       }

     };
    
     sgMail.send(msg)
     .then(() => 
     {
         console.log('Email sent')
     })
     .catch((error) => 
     {
         console.error(error)
     })        
 
 }
 exports.sendEmail = sendEmail;