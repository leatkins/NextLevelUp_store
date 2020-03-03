/*
  Copyright 2019 Square Inc.
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at
      http://www.apache.org/licenses/LICENSE-2.0
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/

const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');
const squareConnect = require('square-connect');
const app = express();
const port = 8000;
const nodemailer = require('nodemailer'); 
const ejs = require('ejs');

app.set('view engine' ,'ejs'); 

app.get('/order-confirm', function(req, res){
 res.render('order-confirm');
 
 mailerStart();
});

//---NODEMAILER ---

async function mailerStart(){
 
  let transporter = nodemailer.createTransport({
    host: "mail.nextlevelup.store", 
    port: "465", 
    secure: true, 
      auth: {
        user: "orders@nextlevelup.store", 
        pass: "4LWc8H}qGrC?"
      }
  });
 

  let info= {
    from: '"[NEXT-LEVEL-UP]- Online Order" <orders@nextlevelup.store' , 
    to: "orders@nextlevelup.store; nextlevelup2020@gmail.com", 
    bcc: "leatkins@aboveall-media.tech", 
    subject: "::NEW ORDER - GENERATED::", 
    html: "<h1>Order Information</h1><hr><h3>Item(s) Ordered </h3><p>" + data.lineItems + "</p><p><strong>Order Amount: </strong>" + data.grandTotal + "</p><hr><p><strong>Confirmation Code: </strong>" +  data.squareCode + data.zipCode +  "</p><p><strong>Customer Name: </strong>" +  data.firstName + " " + data.lastName + "</p><p><strong>Address: </strong>" +  data.address + " <br> " + data.city + " , " + data.state + " " + data.zipCode + "</p><p><strong>Phone Number: </strong> " + data.phoneNumber + "</p> <p><strong>E-mail Address: </strong> " + data.emailAddress + "</p>"
    
  }

  transporter.sendMail(info, function(err, data ){
    if (err){
      console.log("An Error occurred sending the email", err); 
    }else { 
      console.log("Email sucessfully delivered"); 
    }
  }); 
}



//--NODEMAILER - END --- 

//---CUSTOM CODE TYPED HERE---- 

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.post('/order-confirm', urlencodedParser, function(req ,res){
console.log(req.body);
data= req.body;
});



// ----CUSTOM CODE ENDS HERE----

// Set the Access Token
const accessToken = 'EAAAEP69-udQvtYKqwsJNAslyB_p0_uq_eBcWhUGk8fvRB476vFKp3419e6t_meo';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname));

// Set Square Connect credentials and environment
const defaultClient = squareConnect.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
const oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = accessToken;

// Set 'basePath' to switch between sandbox env and production env
// sandbox: https://connect.squareupsandbox.com
// production: https://connect.squareup.com
defaultClient.basePath = 'https://connect.squareupsandbox.com';


app.post('/process-payment', async (req, res) => {
  console.log(req.body); 
  const request_params = req.body;


  // length of idempotency_key should be less than 45
  const idempotency_key = crypto.randomBytes(22).toString('hex');

  // Charge the customer's card
  const payments_api = new squareConnect.PaymentsApi();
  let request_body = {

    source_id: request_params.nonce,
    amount_money: {
    amount: req.body.amount,
    currency: 'USD'
    },
    idempotency_key: idempotency_key
  };

  try {
    const response = await payments_api.createPayment(request_body);
    res.status(200).json({
      'title': 'Payment Successful', 
      'result': response
    });

  } catch(error) {
    res.status(500).json({
      'title': 'Payment Failure',
      'result': error.response.text
    });
  }
});

app.listen((process.env.PORT || port),
  () => console.log(`listening on - http://localhost:${port}`)
);
