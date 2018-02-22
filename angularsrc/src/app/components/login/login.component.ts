import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages/module/flash-messages.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private uid: String;
  private password: String;
  private isChecked: Boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onLoginSubmit(){
    const person = {
      uid: this.uid,
      password: this.password
    }

    this.authService.authenticatePerson(person).subscribe( data => {
  
      if(data.success){
        this.flashMessage.show("You've successfully logged in",{
          cssClass: "alert-success flashfade",
          timeout: 5000
        });
        this.authService.storePerson(data.token, data.person);
        this.router.navigate(['/profile']);

      } else {
        this.flashMessage.show(data.message,{
          cssClass: "alert-danger flashfade",
          timeout: 5000
        });
        this.router.navigate(['/login']);
      }
    });

  }
}
