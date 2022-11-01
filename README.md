
## Integration NodeJS to Salesfoce

how to Integrate NodeJS to Salesfoce using jsforce Package.


## Installation

Install my-project with npm

```bash
  npm install jsforce
```


#### connection.js

Update `instanceUrl` to your salesforce domain and change `version` 

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

### import package

```javascript
    const jsforce = require('jsforce') // import jsforce package
    require('dotenv').config() // import dotenv function
```

### write OAuth2.0 for get Access Token

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

### Create Login Request to Salesforce

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