import 'rxjs/add/operator/switchMap';
import { Component }        from '@angular/core';

import { Pokemon }         from '../pokemon';
import { PokemonService }  from '../services/pokemon.service';

@Component({
  selector: 'pokemon-viewer',
  templateUrl: './pokemon-viewer.component.html',
  styleUrls: [ './pokemon-viewer.component.css' ]
})
export class PokemonViewerComponent {

  pokemon: Pokemon

  constructor(
    private pokemonService: PokemonService,
  ) {}

  getRandomPokemon() {
    let pokedex_number = Math.floor(Math.random() * 802) + 1
    this.pokemonService.getPokemon(pokedex_number).subscribe(
      pokemon => {
        console.log(pokemon)
        this.pokemon = pokemon
      }, err => {
        console.log(err);
      }
    )
  }
}
