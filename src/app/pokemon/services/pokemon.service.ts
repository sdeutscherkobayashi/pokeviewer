import { Pokemon } from '../pokemon';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';


import 'rxjs/add/operator/map';


@Injectable()
export class PokemonService {
    constructor (
      private http: Http
    ) {}

  url = "http://pokeapi.co/api/v2/pokemon";

  getPokemon(pokedex_number: number): Observable<Pokemon> {
    let apiUrl = this.url + '/' + pokedex_number
    console.log('get pokemon ' + pokedex_number)
    console.log('apiUrl: ' + apiUrl)

    return this.http.get(this.url + '/' + pokedex_number)
      .map((res:Response) => res.json());
  }
}
