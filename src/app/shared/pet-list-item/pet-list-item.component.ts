import { Component, Input } from '@angular/core';
import { PetListItemOptions } from './pet-list-item.options';

@Component({
  selector: 'app-pet-list-item',
  templateUrl: 'pet-list-item.component.html'
})
export class PetListItemComponent {
  @Input() pet: PetListItemOptions;

  // tslint:disable-next-line:max-line-length
  photo = 'https://qph.fs.quoracdn.net/main-qimg-a2ee6adc3d8c9b0b59f3e2977c5d4ef3-c';
}
