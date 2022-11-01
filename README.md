
## Integration NodeJS to Salesfoce

how to use Integrate NodeJS to Salesfoce using JSFORCE Package.


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

Configure salesforce Authorization 

```bash
   .env
```

```bash
SF_USERNAME = "user@salesforce.com"
SF_PASSWORD = "your-password"
SF_USER_TOKEN = "your-token"
SF_CLIENT_ID = "your-client-id"
SF_CLIENT_SECRET = "your-client-secret"
```

