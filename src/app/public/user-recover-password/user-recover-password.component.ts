import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-recover-password',
  templateUrl: './user-recover-password.component.html',
  styleUrls: ['./user-recover-password.component.scss']
})
export class UserRecoverPasswordComponent implements OnInit {
  userRecoverPassword: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.userRecoverPassword = this.fb.group ( {
      email: ['', [Validators.required, Validators.email]],
    } );
  }

  submit() {
    console.log (this.userRecoverPassword.value);
  }

}
