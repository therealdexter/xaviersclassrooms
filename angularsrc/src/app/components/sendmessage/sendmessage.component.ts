import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { MessageService } from '../../services/message.service';
import { FlashMessagesService } from 'angular2-flash-messages/module/flash-messages.service';
import { ValidateService } from '../../services/validate.service';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sendmessage',
  templateUrl: './sendmessage.component.html',
  styleUrls: ['./sendmessage.component.scss']
})
export class SendmessageComponent implements OnInit {

  private to: String;
  private toName: String;
  private title: String;
  private message: String = "";
  private isValid: Boolean;
  private length: Number = 0;

  constructor(
    private authService: AuthService,
    private messageService: MessageService,
    private flashMessage: FlashMessagesService,
    private validateService: ValidateService,
    private router: Router
  ) { }

  ngOnInit() {
    this.length = 250 - this.message.length;
  }

  updateCharRem(){
    this.length = 250 - this.message.length;
  }

  onMessageSend(){

    this.isValid = true;

    if(!this.validateService.validateMessageTitle(this.title)){
      this.isValid = this.isValid && false;
      this.flashMessage.show("Title should be 10 to 50 characters long",{
        timeout: 5000,
        cssClass: 'alert-danger flashfade'
      });
    }

    if(!this.validateService.validateMessageBody(this.message)){
      this.isValid = this.isValid && false;
      this.flashMessage.show("Message should be 50 to 250 characters long",{
        timeout: 5000,
        cssClass: 'alert-danger flashfade'
      });
    }

    this.authService.uidExists({uid: this.to}).subscribe(response => {
      if(!response.success && this.isValid && (this.authService.getLoggedInDetails().uid != this.to)){

      let date = new Date();
      let currdate = "" + date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear() + "";
      let currtime = "" + ((date.getHours() < 10) ? "0"+date.getHours() : ""+date.getHours()) + ":" + ((date.getMinutes() < 10) ? "0"+date.getMinutes() : ""+date.getMinutes());

        let message = {
          uids: this.authService.getLoggedInDetails().uid,
          name: this.authService.getLoggedInDetails().name,
          uidr: this.to,
          namer: response.person.name,
          title: this.title,
          message: this.message,
          date: currdate,
          time: currtime
        }

        this.messageService.postMessages(message).subscribe(data => {
          if(data.success){
            this.flashMessage.show("Message has been sent to "+message.namer+" ("+message.uidr+")",{
              timeout: 5000,
              cssClass: 'alert-success flashfade'
            });
            this.router.navigate(['/messages/outbox']);
          } else {
            this.flashMessage.show("Message could not be sent to "+message.namer+" ("+message.uidr+")",{
              timeout: 5000,
              cssClass: 'alert-danger flashfade'
            });
          }
        });

      } else {
        if(!this.validateService.validateUID(this.to)){
          this.flashMessage.show("UID should be a 6 digit number",{
            timeout: 5000,
            cssClass: 'alert-danger flashfade'
          });
        } else if (this.authService.getLoggedInDetails().uid == this.to){
          this.flashMessage.show("You cannot send a message to yourself!",{
            timeout: 5000,
            cssClass: 'alert-danger flashfade'
          });
        } else if (response.success){
          this.flashMessage.show(this.to + " is not registered",{
            timeout: 5000,
            cssClass: 'alert-danger flashfade'
          });
        }
      }
    });

  }

}
