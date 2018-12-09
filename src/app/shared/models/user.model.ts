import { Location } from './location.model';
import { Deserializable } from './deserializable.model';

export class User implements Deserializable {
  id: number;
  nome: string;
  data_nascimento: string;
  email: string;
  email_publico: boolean;
  senha: string;
  sexo: string;
  localizacao: Location;

  deserialize(input: any): User {
    Object.assign(this, input);
    this.localizacao = new Location().deserialize(input.localizacao);
    return this;
  }
}
