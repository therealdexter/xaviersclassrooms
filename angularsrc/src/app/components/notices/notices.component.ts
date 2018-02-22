import { Component, OnInit } from '@angular/core';
import { NoticeService } from '../../services/notice.service';

@Component({
  selector: 'app-notices',
  templateUrl: './notices.component.html',
  styleUrls: ['./notices.component.scss']
})
export class NoticesComponent implements OnInit {

  notices: Object[];
  noticelength: Number;

  constructor(
    private noticeService: NoticeService
  ) { }

  ngOnInit() {
    this.noticeService.getNotices().subscribe(
      notice => {
        this.notices = notice;
        this.notices = this.notices.reverse();
        this.noticelength = this.notices.length;
      }
    );
  }

}
