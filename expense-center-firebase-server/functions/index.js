const functions = require('firebase-functions');
const admin = require('firebase-admin');

const serviceAccount = require('./config/account-credentials.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://expense-center-013-default-rtdb.firebaseio.com"
});
