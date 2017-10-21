const admin = require('firebase-admin');

// TODO: put this in ENV file to be secure
const serviceAccount = require('../configs/express-auth-crud-api-firebase-adminsdk-lrd68-1dd245a9b6.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://express-auth-crud-api.firebaseio.com',
});

module.exports = admin;
