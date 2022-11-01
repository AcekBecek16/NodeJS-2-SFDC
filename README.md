
## Integration NodeJS to Salesfoce

how to Integrate NodeJS to Salesfoce using jsforce Package.


## Installation

Install my-project with npm

```bash
  npm install jsforce
```


#### connection.js

Update `instanceUrl` to your salesforce domain and change API `version` 

```bash
   cd /node_modules/jsforce/lib/connection.js
```

```javascript
    var defaults = {
        loginUrl: "https://login.salesforce.com", 
        instanceUrl: "https://yourdomain.lightning.force.com/", 
        version: "55.0"
    };
```

#### dotenv

Configure salesforce Authorization. create `.env` file and configure your salesforce authenticate

```bash
    SF_USERNAME = "user@salesforce.com"
    SF_PASSWORD = "your-password"
    SF_USER_TOKEN = "your-token"
    SF_CLIENT_ID = "your-client-id"
    SF_CLIENT_SECRET = "your-client-secret"
```

## Create Connection to Salesforce

Use this code to connect your NodeJS application to salesforce

#### Import Package

```javascript
    const jsforce = require('jsforce') // import jsforce package
    require('dotenv').config() // import dotenv function
```

#### Write OAuth2.0 for get Access Token

```javascript
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
```

#### Create Login Request to Salesforce

```javascript
    conn.login(sf_username, sf_password, function(err, userInfo) {
        if (err) { return console.error(err); }
        console.log("Access_Token: "+conn.accessToken);
        console.log("Instance_URL: "+conn.instanceUrl);
        console.log("User ID: " + userInfo.id);
        console.log("Org ID: " + userInfo.organizationId);
        console.log("You Successfuly Login. Welcome!");
    
    });
```

## How to Use

### CURD

jsforce connection support CRUD methods for salesforce integration

#### Retrieve Single Record
```javascript
    // Single record retrieval
    conn.sobject("Account").retrieve("0017000000hOMChAAO", function(err, account) {
        if (err) { return console.error(err); }
        console.log("Name : " + account.Name);
        // ...
    });
```

#### Retrieve Multi Records
```javascript
    // multi record retrieval
    conn.sobject("Account").retrieve([
        "0017000000hOMChAAO",
        "0017000000iKOZTAA4"
        ], function(err, accounts) {
        if (err) { return console.error(err); }
        for (var i=0; i < accounts.length; i++) {
            console.log("Name : " + accounts[i].Name);
        }
        // ...
    });
```

#### Create Single Records
```javascript
    // Single record creation
    conn.sobject("Account").create({ Name : 'My Account #1' }, function(err, ret) {
        if (err || !ret.success) { return console.error(err, ret); }
        console.log("Created record id : " + ret.id);
        // ...
    });
```

#### Create Multi Records
```javascript
    // Multiple records creation
    conn.sobject("Account").create([
        { Name : 'My Account #1' },
        { Name : 'My Account #2' }
    ],
        function(err, rets) {
        if (err) { return console.error(err); }
        for (var i=0; i < rets.length; i++) {
            if (rets[i].success) {
            console.log("Created record id : " + rets[i].id);
            }
        }
        // ...
    });
```

## Support

For support, email acekmegamen16@gmail.com or join my Discord Server.

[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://trailblazer.me/id/azispakaya)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/acekbecek182)

