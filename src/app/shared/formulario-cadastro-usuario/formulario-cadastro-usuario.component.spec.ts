import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCadastroUsuarioComponent } from './formulario-cadastro-usuario.component';

describe('FormularioCadastroUsuarioComponent', () => {
  let component: FormularioCadastroUsuarioComponent;
  let fixture: ComponentFixture<FormularioCadastroUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioCadastroUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioCadastroUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
