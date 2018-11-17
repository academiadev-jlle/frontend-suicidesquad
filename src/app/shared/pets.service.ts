import {Injectable} from '@angular/core';
import {PetListItemOptions} from './pet-list-item/pet-list-item.options';

@Injectable ( {
  providedIn: 'root'
} )
export class PetsService {

  pets: PetListItemOptions[] = [];

  constructor() {
    this.pets.push ( ...[{
      id: 1,
      name: 'Nymeria',
      description: 'A loba dos olhos amarelos, e recebeu esse nome como uma homenagem a rainha dos Rhoynar. Ela é idêntica a Arya, inteligente, brava e mal-humorada. Quando ela morde o braço de Joffrey, Arya acaba que espanta ela para que não fosse punida. Essa foi a ultima vez que vimos Nymeria.',
      isAdoption: false,
      isLost: true,
      image: 'https://typeset-beta.imgix.net/uploads/image/2017/7/18/9c717512-8860-4372-badf-b8f026fd9aac-nymeria.jpg'
    }, {
      id: 2,
      name: 'Ghost',
      description: 'esse lobo é o mais lindo de todos, pelos brancos com olhos vermelhos. Jon Snow já gostou de cara porque ele era o único lobo diferente que tinha entre os filhotes, ele era albino. Pois assim como Snow, ele era estranho entre seus irmãos  e também por ser o mais rápidos a amadurecer. Ghost recebeu esse nome por nunca emitir nenhum som, nada, nem um mero ruído de seu rugido.',
      isAdoption: false,
      isLost: true,
      image: 'https://imgix.bustle.com/uploads/image/2018/10/1/f3c103af-0e69-48dc-8b83-95399661beda-ghost-1.png'
    }, {
      id: 3,
      name: 'Gray Wind',
      description: 'É um exímio guerreiro, dava medo em seus inimigos e tirou muitos Lannister desse mundo. Ele defendeu Robb durante vários momentos quando tentou ser o Rei no Norte, como morder os dedos do Lord Greatjon Umber quando saca sua espada sobre Robb.',
      isAdoption: false,
      isLost: true,
      image: 'https://howlingforjustice.files.wordpress.com/2012/06/grey-wind-dire-wolf-got.png'
    }, {
      id: 4,
      name: 'Shaggy Dog',
      description: 'Violento e rude como seu dono, cresceu como uma fera, já que não teve educação como seus irmãos teve. Algumas vezes, o lobo de Bran, Summer, teve que brigar com ShaggyDog para que ele obedecesse ordens, rebelde demais. ',
      isAdoption: true,
      isLost: false,
      image: 'https://pbs.twimg.com/media/C6MOE7CUoAA_pHM.jpg'
    }, {
      id: 5,
      name: 'Summer',
      description: 'Verão e seus irmãos são encontrados na neve por Jon Snow e Robb Stark, próximos do corpo de sua mãe. Bran tem dificuldade em escolher o nome para sua cria de lobo, pensando em diversos nomes sem nunca escolher um. Após a queda de Bran, Verão passou a uivar embaixo da janela do seu quarto, e mesmo que o enxotassem, ele voltava depois para continuar o uivo.',
      isAdoption: true,
      isLost: false,
      image: 'http://cdn.collider.com/wp-content/uploads/2016/05/game-of-thrones-bran-summer.jpg'
    }, {
      id: 6,
      name: 'Lady',
      description: 'Foi a acompanhante de Sansa  a caminho de Porto Real quando Ned se mudou para lá para a sua nomeação como a Mão do Rei.',
      isAdoption: true,
      isLost: false,
      image: 'http://2.bp.blogspot.com/-bsTVoNR_RjY/T5N7Yo20U1I/AAAAAAAAIhE/IBy8LzoMno0/s1600/dire-wolf-game-of-thrones-i4.jpg'
    }] );
  }

  getById(id: number): PetListItemOptions {
    return this.pets.filter ( pet => pet.id === id )[0];
  }

  getLost(): PetListItemOptions[] {
    return this.pets.filter ( pet => pet.isLost );
  }

  getAdoption(): PetListItemOptions[] {
    return this.pets.filter ( pet => pet.isAdoption );
  }
}
