import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  @ViewChild('f') signupForm!: NgForm;
  user!: { email:string, password:string; subscription:string};
  submited = false;
  onSubmit() {
        this.submited = true;
        console.log('email'+this.signupForm.value.email);
        console.log('password'+this.signupForm.value.password);
        console.log('subscription:'+this.signupForm.value.subscriptions);
        this.user.email=this.signupForm.value.email;
        this.user.password=this.signupForm.value.password;
        this.user.subscription=this.signupForm.value.subscriptions;
        this.signupForm.reset();
  }
  defaultSubscriptions = 'Advanced'

}
