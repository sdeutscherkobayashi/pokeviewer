import 'rxjs/add/operator/switchMap';
import { Component, Input }        from '@angular/core';

import { Pokemon }         from '../pokemon';

@Component({
  selector: 'pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: [ './pokemon-detail.component.css' ]
})
export class PokemonDetailComponent {
  @Input()
  pokemon: Pokemon;
}
