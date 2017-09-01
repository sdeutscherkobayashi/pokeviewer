import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard.component';
import { PokemonViewerComponent }  from './pokemon/pokemon-viewer/pokemon-viewer.component';
import { PokemonDetailComponent }  from './pokemon/pokemon-detail/pokemon-detail.component';

import { AppRoutingModule }     from './app-routing.module';

import { PokemonService } from './pokemon/services/pokemon.service'
import { HeroService } from './hero.service'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    PokemonDetailComponent,
    PokemonViewerComponent
  ],
  providers: [ PokemonService, HeroService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
