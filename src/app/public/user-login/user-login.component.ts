import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  userAuthentication: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.userAuthentication = this.fb.group ( {
      user: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength ( 8 )]],
    } );
  }

  submit() {
    console.log (this.userAuthentication.value);
  }

}
