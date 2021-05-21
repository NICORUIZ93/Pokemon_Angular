import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
})
export class PokemonComponent implements OnInit {
  pokemons: Object;
  constructor(private service: ApiService) {}

  ngOnInit() {
    this.pokemons = this.service.getAll();
    console.log(this.pokemons);
  }
}
