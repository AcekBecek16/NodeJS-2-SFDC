/**
 * Class    'HTTPs-POST : NodeJS-2-Salesforce'
 * Author   'AcekBecek'
 * Twitter  '@acekbecek16'
 */
const express = require('express')
const jsforce = require('jsforce')
const app = express()
const port = 3000

require('dotenv').config()
const client_secret = process.env.SF_CLIENT_SECRET
const clent_id = process.env.SF_CLIENT_ID
const sf_username = process.env.SF_USERNAME
const sf_password = process.env.SF_PASSWORD
const sf_url = 'https://login.salesforce.com/services/oauth2/token'

const conn = new jsforce.Connection({
    oauth2:{
        clientId : clent_id,
        clientSecret : client_secret,
        redirectUri: sf_url
    },
    
});

conn.login(sf_username, sf_password, function(err, userInfo) {
    if (err) { return console.error(err); }
    console.log("Access_Token: "+conn.accessToken);
    console.log("Instance_URL: "+conn.instanceUrl);
    console.log("User ID: " + userInfo.id);
    console.log("Org ID: " + userInfo.organizationId);
    console.log("You Successfuly Login. Welcome!");
   
  });

conn.sobject("Account").create({
    Name: 'Test sample Account - NodeJS',
    Type : 'Prospect',
    Phone: '0821738192',
    Website: 'www.example.com'
}, function(err, resultsRequest){
    if(err || !resultsRequest.success){ console.log('Ada Error ya guys')}

    conn.sobject("Account").retrieve(resultsRequest.id, function(err, resultResponse){
        if(err){return console.error(err);}
        const msg = {
            'Success' : resultsRequest.success,
            'Id'     : resultResponse.Id
        }
        console.log(JSON.stringify(msg))
        })
    
 })

app.listen(port, () => console.log(`Your Server Running ${port}!`))