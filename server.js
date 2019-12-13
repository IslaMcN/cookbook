const admin = require('firebase-admin');
const app = admin.initializeApp();

app({
    credential: admin.credential.applicationDefault(),
    databaseURL: 'https://<DATABASE_NAME>.firebaseio.com'
  });