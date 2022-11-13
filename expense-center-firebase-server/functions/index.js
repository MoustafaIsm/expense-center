const functions = require('firebase-functions');
const admin = require('firebase-admin');

const serviceAccount = require('./config/account-credentials.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://expense-center-013-default-rtdb.firebaseio.com"
});


exports.sendNotification = functions.database.ref("chats/{chatId}/messages/{messageId}")
    .onWrite(async (snapshot) => {
        const message = snapshot.after.val().message;
        const sentBy = snapshot.after.val().sentBy;
        const sentTo = snapshot.after.val().sentTo;

        // Prepare promise to get the device notification tokens.
        const sendToNotificationToken = admin.database()
            .ref(`/users/${sentTo}/notificationToken`).once("value");
        const sentByUsername = admin.database()
            .ref(`/users/${sentBy}/username`).once("value");

        // Get the device notification tokens.
        const result = await Promise.all([sendToNotificationToken, sentByUsername]);

        const tokenSnapshot = result[0];
        const usernameSnapshot = result[1];

        // Check if there are any device tokens.
        if (!tokenSnapshot.exists()) {
            return functions.logger.log("There are no notification tokens to send to.");
        }
        // Get token
        const token = tokenSnapshot.val();
        const username = usernameSnapshot.val();


    });