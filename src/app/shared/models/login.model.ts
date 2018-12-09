import { Deserializable } from './deserializable.model';

export class Login implements Deserializable {
  email: string;
  senha: string;

  deserialize(input: any): Login {
    Object.assign(this, input);
    return this;
  }
}
