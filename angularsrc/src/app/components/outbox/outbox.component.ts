import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-outbox',
  templateUrl: './outbox.component.html',
  styleUrls: ['./outbox.component.scss']
})
export class OutboxComponent implements OnInit {

  private outbox: Object[];
  private outboxsize: Number;

  constructor(
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.authService.getProfile().subscribe(data => {
      this.outbox = data.user.outbox;
      this.outbox = this.outbox.reverse();
      this.outboxsize = this.outbox.length;
    });
  }

}
