import {Component, OnInit} from '@angular/core';
import {PetListItemApiOptions} from '../../shared/pet-list-item/pet-list-item-api.options';
import {HttpClient} from '@angular/common/http';

@Component ( {
  selector: 'app-lost-pets',
  templateUrl: './lost-pets.component.html',
  styleUrls: ['./lost-pets.component.scss']
} )
export class LostPetsComponent implements OnInit {
  lostPets: PetListItemApiOptions[];
  configUrl = 'https://backend-suicide-squad.herokuapp.com/pets';

  constructor(private http: HttpClient) {
    this.http.get(this.configUrl).subscribe(result => {
      console.log(result);
      this.lostPets = result['results'];
    });
  }

  ngOnInit() {
  }

}
