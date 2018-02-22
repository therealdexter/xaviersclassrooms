import { Component, OnInit } from '@angular/core';
import { NoticeService } from '../../services/notice.service';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages/module/flash-messages.service';
import { Router } from '@angular/router';
import { ValidateService } from '../../services/validate.service';

@Component({
  selector: 'app-addnotice',
  templateUrl: './addnotice.component.html',
  styleUrls: ['./addnotice.component.scss']
})
export class AddnoticeComponent implements OnInit {

  notice: String = "";
  title: String = "";
  length: Number = 0;

  constructor(
    private noticeService: NoticeService,
    private authService: AuthService,
    private flashMessage: FlashMessagesService,
    private router: Router,
    private validateService: ValidateService
  ) { }

  ngOnInit() {
    this.length = 250 - this.notice.length;
  }

  updateCharRem(){
    this.length = 250 - this.notice.length;
  }

  addNotice(){
    this.authService.getProfile().subscribe(profile => {
      let date = new Date();
      let currdate = "" + date.getUTCDate() + "/" + (date.getUTCMonth()+1) + "/" + date.getUTCFullYear() + "";
      let currtime = "" + ((date.getHours() < 10) ? "0"+date.getHours() : ""+date.getHours()) + ":" + ((date.getMinutes() < 10) ? "0"+date.getMinutes() : ""+date.getMinutes());

      const notice = {
        title: this.title,
        notice: this.notice,
        author: profile.user.name,
        date: currdate,
        time: currtime
      }

      const not = {
        title: this.title,
        notice: this.notice
      }

      if(this.validateService.validateNotices(not)){
        this.noticeService.addNotice(notice).subscribe( data => {
          if(data.success){
            this.flashMessage.show(data.message,{
              timeout: 5000,
              cssClass: 'alert-success flashfade'
            });
            this.router.navigate(['/notices']);
          }else{
            this.flashMessage.show(data.message,{
              timeout: 5000,
              cssClass: 'alert-danger flashfade'
            });
          }
        });
      } else {
        if(!this.validateService.validateTitle(not.title)){
          this.flashMessage.show("Title should be 10 to 50 characters long",{
            timeout: 5000,
            cssClass: 'alert-danger flashfade'
          });
        }
        if(!this.validateService.validateNoticeBody(not.notice)){
          this.flashMessage.show("Notice should be 50 to 250 characters long",{
            timeout: 5000,
            cssClass: 'alert-danger flashfade'
          });
        }
      }

    });

  }
} 
