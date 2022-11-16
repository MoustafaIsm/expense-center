/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { Toast } from '@capacitor/toast';
import {
  ActionPerformed,
  PushNotificationSchema,
  PushNotifications,
  Token,
} from '@capacitor/push-notifications';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  constructor(private router: Router, private notificationService: NotificationService) { }

  ngOnInit() {
    PushNotifications.requestPermissions().then((result) => {
      if (result.receive === 'granted') {
        PushNotifications.register();
      } else {
        this.showToast('Push notifications not granted');
      }
    });

    PushNotifications.addListener('registration', (token: Token) => {
      const id = parseInt(localStorage.getItem('id'), 10);
      const user = JSON.parse(localStorage.getItem('user'));
      this.notificationService.saveTokenInDatabase(token.value, id, user.username);
    });

    PushNotifications.addListener('registrationError', (error: any) => {
      // Handle push notification registration error here.
      this.showToast('Push notifications registration error');
    });

    PushNotifications.addListener('pushNotificationReceived', (notification: PushNotificationSchema) => {
      // Show the notification payload if the app is open on the device.
      const { title } = notification;
      this.showToast(title);
    });

    PushNotifications.addListener('pushNotificationActionPerformed', (notification: ActionPerformed) => {
      // The needed action to take when user tap on a notification.
      this.router.navigate(['main/messages']);
    }
    );
  }

  async showToast(msg: string) {
    await Toast.show({ text: msg });
  }

}
