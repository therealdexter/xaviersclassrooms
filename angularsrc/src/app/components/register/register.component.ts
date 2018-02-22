import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages/module/flash-messages.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  private name: String;
  private uid: String;
  private email: String;
  private password: String;
  private cpassword: String;
  private isValid: Boolean;

  constructor(
    private validateService: ValidateService,
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onRegisterSubmit(){
    const person = {
      name: this.name,
      uid: this.uid,
      email: this.email,
      password: this.password,
      cpassword: this.cpassword
    }

    this.isValid = true;

    //Required fields
  if(!this.validateService.validateName(person.name)){
    //fill in all fields
    this.flashMessage.show("Please fill in your full name (eg. Walter White)",{
      timeout: 5000,
      cssClass: 'alert-danger flashfade'
    });
    this.isValid = this.isValid && false;
  }
  
  if(!this.validateService.validateEmail(person.email)){
    this.flashMessage.show("Please enter a valid email ID",{
      timeout: 5000,
      cssClass: 'alert-danger flashfade'
    });
    this.isValid = this.isValid && false;
  }

  if(!this.validateService.validatePasswords(person.password,person.cpassword)){
    this.flashMessage.show("Password field empty or passwords don't match. Password must be between 8 and 12 characters long and include at least one numeric digit.",{
      timeout: 5000,
      cssClass: 'alert-danger flashfade'
    });
    this.isValid = this.isValid && false;
  }

  if(!this.validateService.validateUID(person.uid)){
    this.flashMessage.show("UID should be a 6 digit number",{
      timeout: 5000,
      cssClass: 'alert-danger flashfade'
    });
    this.isValid = this.isValid && false;
  } else {
    this.authService.uidExists({uid: person.uid}).subscribe( response => {
      if(!response.success){
        this.flashMessage.show(response.message,{
          timeout: 5000,
          cssClass: 'alert-danger flashfade'
        });
        this.isValid = this.isValid && false;
      } else {
        if(this.isValid){
          console.log("person is "+person);
          this.authService.registerPerson(person).subscribe( data => {
            if(data.success){
              this.flashMessage.show("You are now registered. Login using your username and password.",{
                timeout: 5000,
                cssClass: 'alert-success flashfade'
              });
              this.router.navigate(['/login']);
            } else {
              this.flashMessage.show("Something went wrong!",{
                timeout: 5000,
                cssClass: 'alert-danger flashfade'
              });
              this.router.navigate(['/register']);
            }
          });
        }
      }
    });
  }

  
  }

}
