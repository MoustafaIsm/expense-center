import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChatItem } from 'src/app/interfaces/ChatItem';
import { User } from 'src/app/interfaces/User';
import { ProfileService } from 'src/app/services/profile/profile.service';

@Component({
  selector: 'app-chat-item',
  templateUrl: './chat-item.component.html',
  styleUrls: ['./chat-item.component.scss'],
})
export class ChatItemComponent implements OnInit {
  @Input() chatItem: ChatItem;
  userId: number = parseInt(localStorage.getItem('id'), 10);
  otherUser: User;

  constructor(private router: Router, private profileService: ProfileService) { }

  // TODO: Get user info with an api call
  ngOnInit() {
    this.getUser();
  }

  openChat() {
    this.router.navigate(['main/messages/chat', this.chatItem.id]);
  }

  getUser() {
    const id = this.userId === this.chatItem.firstUserId ? this.chatItem.secondUserId : this.chatItem.firstUserId;
    this.profileService.getUser(id.toString()).subscribe(data => {
      this.otherUser = data.user;
    });
  }

}
