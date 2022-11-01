
## Integration NodeJS to Salesfoce

how to use Integrate NodeJS to Salesfoce using JSFORCE Package.


## Installation

Install my-project with npm

```bash
  npm install jsforce
  cd /node_modules/jsforce/lib/connection.js
```
Update `instanceUrl` to your salesforce domain and change `version` 

#### connection.js

```javascript
var defaults = {
  loginUrl: "https://login.salesforce.com", 
  instanceUrl: "https://yourdomain.lightning.force.com/", 
  version: "55.0"
};
```

