import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators } from '@angular/forms';
import {User} from '../../shared/models/user.model';
import {Location} from '../../shared/models/location.model';
import { HttpClient } from '@angular/common/http';
import { finalize } from 'rxjs/operators';
import {UserService} from '../../shared/services/user.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})

export class UserRegisterComponent implements OnInit {
  user_form: FormGroup;
  feedback: Feedback;
  isBusy: boolean;

  constructor(private formBuilder: FormBuilder, private changeDetector: ChangeDetectorRef, private userService: UserService) { }

  ngOnInit() {
    this.user_form = this.formBuilder.group({
      id: [null],
      nome: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      email_publico: [ true, ],
      senha: ['', [Validators.required, Validators.minLength(8)]],
      confirmacao_senha: ['', [Validators.required]],
      data_nascimento: [''],
      sexo: [''],
      cidade: [''],
      estado: [''],
      bairro:[''],
    });
  }

  /* TODO validar se os campos de senha são iguais */

  private prepareSave(): User {
    const local_dados = [{
      bairro: this.user_form.get('bairro').value,
      cidade: this.user_form.get('cidade').value,
      estado: this.user_form.get('estado').value,
    },
    ];
    const local = new Location().deserialize(local_dados);

    const user_dados = [{
      id: this.user_form.get('id').value,
      nome: this.user_form.get('id').value,
      email: this.user_form.get('id').value,
      email_publico: this.user_form.get('id').value,
      senha: this.user_form.get('id').value,
      data_nascimento: this.user_form.get('id').value,
      sexo: this.user_form.get('id').value,
      localizacao: local,
    },
    ];
    return new User().deserialize(user_dados);
  }

  onSubmit() {
    const user = this.prepareSave();
    console.log(user);
  //   if (this.user_form.valid) {
  //     this.isBusy = true;
  //     this.userService
  //       .create(this.user_form.value)
  //       .pipe(
  //         finalize(() => this.isBusy = false)
  //       )
  //       .subscribe(
  //         () => {
  //           this.feedback = {
  //             type: 'success',
  //             title: 'Você conseguiu!',
  //             message: 'Seu cadastro foi efetuado com sucesso'
  //           };
  //
  //           this.resetForm();
  //         },
  //         error => {
  //           this.feedback = {
  //             type: 'danger',
  //             title: 'Ops!',
  //             message: error.message
  //           };
  //           console.log('error', error);
  //         }
  //       );
  //   }
  // }
  //
  // resetForm() {
  //   this.user_form.reset();
  }
}

class Feedback {
  type: string;
  title: string;
  message: string;
}
