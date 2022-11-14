/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';

import {
  PushNotificationSchema,
  PushNotifications,
  Token,
  ActionPerformed,
} from '@capacitor/push-notifications';
import { Toast } from '@capacitor/toast';
import { Capacitor } from '@capacitor/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  notifications: (notifications: PushNotificationSchema) => PushNotificationSchema[];

  constructor() { }

  ngOnInit() {
    const isPushNotificationsAvailable = Capacitor.isPluginAvailable('PushNotifications');
    if (isPushNotificationsAvailable) {
      this.initPushNotifications();
    } else {
      console.log('Push Notifications not available');
      this.showToast('Push Notifications not available');
    }

  }

  initPushNotifications() {
    PushNotifications.checkPermissions().then((res) => {
      if (res.receive !== 'granted') {
        PushNotifications.requestPermissions().then((response) => {
          if (response.receive === 'denied') {
            this.showToast('Push Notification permission denied');
          }
          else {
            this.showToast('Push Notification permission granted');
            this.register();
          }
        });
      }
      else {
        this.register();
      }
    });
  }

  register() {
    console.log('Initializing HomePage');

    // Register with Apple / Google to receive push via APNS/FCM
    PushNotifications.register();

    // On success, we should be able to receive notifications
    PushNotifications.addListener('registration', (token: Token) => {
      console.log('Push registration success, token: ' + token.value);
    });

    // Some issue with our setup and push will not work
    PushNotifications.addListener('registrationError', (error: any) => {
      console.log('Error on registration: ' + JSON.stringify(error));
    });

    // Show us the notification payload if the app is open on our device
    PushNotifications.addListener('pushNotificationReceived', (notification: PushNotificationSchema) => {
      this.notifications = (notifications: any) =>
        [...notifications, { id: notification.id, title: notification.title, body: notification.body, type: 'foreground' }];
      console.log('Push received: ' + JSON.stringify(notification));
    });

    // Method called when tapping on a notification
    PushNotifications.addListener('pushNotificationActionPerformed',
      (notification: ActionPerformed) => {
        this.notifications = (notifications: any) =>
          [...notifications, { id: notification.notification.data.id, title: notification.notification.data.title, body: notification.notification.data.body, type: 'action' }];
        console.log('Push action performed: ' + JSON.stringify(notification));
      });
  }

  async showToast(msg: string) {
    await Toast.show({ text: msg });
  }

}
