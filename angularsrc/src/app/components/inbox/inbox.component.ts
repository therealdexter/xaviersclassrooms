import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {

  private inbox: Object[];
  private inboxsize: Number;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(data => {
      this.inbox = data.user.inbox;
      this.inbox = this.inbox.reverse();
      this.inboxsize = this.inbox.length;
    });
  }

}
