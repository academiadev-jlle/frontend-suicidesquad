import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})

export class UserRegisterComponent implements OnInit {
  user_form: FormGroup;

  constructor(private formBuilder: FormBuilder, private changeDetector: ChangeDetectorRef) { }

  ngOnInit() {
    this.user_form = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      password_check: ['', [Validators.required]],
      desired_distance: [''],
      photo: [''],
    });
  }

/* TODO validar se os campos de senha são iguais */

  onSubmit() {
    console.log(this.user_form.value);
  }

}
