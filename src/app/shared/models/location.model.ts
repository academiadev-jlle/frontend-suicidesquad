import { Deserializable } from './deserializable.model';

export class Location implements Deserializable{
  bairro: string;
  cidade: string;
  estado: string;

  deserialize(input: any): Location {
    Object.assign(this, input);
    return this;
  }
}