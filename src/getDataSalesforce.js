/**
 * Class    'HTTPs-POST : NodeJS-2-Salesforce'
 * Author   'AcekBecek'
 * Twitter  '@acekbecek16'
 */

const express = require('express')
const jsforce = require('jsforce')
const app = express()
const port = 1235

require('dotenv').config()
const client_secret = process.env.SF_CLIENT_SECRET
const clent_id = process.env.SF_CLIENT_ID
const sf_username = process.env.SF_USERNAME
const sf_password = process.env.SF_PASSWORD
const sf_url = 'https://login.salesforce.com/'

const conn = new jsforce.Connection({
    oauth2:{
        clientId : clent_id,
        clientSecret : client_secret,
        redirectUri: sf_url
    },
    
});

conn.login(sf_username, sf_password, function(err, userInfo) {
    if (err) { return console.error(err); }
    // console.log("Access_Token: "+conn.accessToken);
    console.log("Instance_URL: "+conn.instanceUrl);
    console.log("User ID: " + userInfo.id);
    console.log("Org ID: " + userInfo.organizationId);
    console.log("You Successfuly Login. Welcome!");
   
  });

conn.sobject("Account").retrieve('0015g00000zz5XqAAI', function(err, result){
    if(err){return console.error(err)}
    app.get('/single_account', (req, res)=>{
        //console.log(JSON.stringify(result))
        res.send(JSON.stringify(result))
    })
})

// conn.sobject("Account").retrieve([
//     "0015g00000zz5XqAAI",
//     "0015g00000q9MscAAE"
//   ], function(err, accounts) {
//     if (err) { return console.error(err); }
    
//     app.get('/Accounts', (req, res)=>{  
//         res.send(JSON.stringify(accounts))
//     })
//   });

// const records = [];
// conn.query("SELECT Id, Name, Phone, Type, BillingCity, Website FROM Account", function(err, result) {
//     if (err) { return console.error(err); }
//     console.log("Your Total Account : " + result.totalSize);
//     //console.log("fetched : " + result.records.length);
//     app.get('/Account', (req, res)=>{
//         res.send(JSON.stringify(result))
//     })
// });

app.listen(port, () => console.log(`Your Server Running ${port}!`))