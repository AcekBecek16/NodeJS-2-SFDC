/**
 * Author   'AcekBecek'
 * Twitter  '@acekbecek16'
 * Desc     'Sample Node-2-SFDC'
 */

const express = require('express')
const jsforce = require('jsforce')
const app = express()
const port = 1235

require('dotenv').config()
const client_secret = process.env.SF_CLIENT_SECRET
const clent_id = process.env.SF_CLIENT_ID
const sf_username = process.env.SF_USERNAME
const sf_password = process.env.SF_PASSWORD+""+process.env.SF_USER_TOKEN
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
    console.log("Access_Token: "+conn.accessToken);
    console.log("Instance_URL: "+conn.instanceUrl);
    console.log("User ID: " + userInfo.id);
    console.log("Org ID: " + userInfo.organizationId);
    console.log("You Successfuly Login. Welcome!");
   
  });

  // Write Your Code Here


app.listen(port, () => console.log(`Your Server Running ${port}!`))