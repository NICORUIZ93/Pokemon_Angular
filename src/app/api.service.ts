import { HttpClient } from '@angular/common/http';
import { ReturnStatement } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  Pokemons: any[] = [];
  UrlPokemons: any[] = [];
  Valores: any[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit() {}

  getAll() {
    this.http
      .get('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200')
      .subscribe((data) => {
        this.Pokemons = data['results'];
        for (const key of this.Pokemons) {
          this.UrlPokemons.push(key['url']);
        }
        for (const key in this.UrlPokemons) {
          this.http.get(this.UrlPokemons[key]).subscribe((data) => {
            this.Valores.push(data);
          });
        }
      });
    return this.Valores;
  }
}
