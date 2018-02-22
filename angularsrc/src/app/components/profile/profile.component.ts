import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { NoticeService } from '../../services/notice.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  person: Object;

  constructor(
    private authService: AuthService,
    private router: Router,
    private noticeService: NoticeService
  ) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(
      profile => {
        this.person = profile.user;
      }, err =>{
        console.log(err);
        return false;
      }
    );

  }

}
