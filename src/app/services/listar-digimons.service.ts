import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ListarDigimonsService {
  private api_digimon = 'https://digimon-api.vercel.app/api/digimon';

  constructor(private http: HttpClient) {}

  buscaNome(nome: String) {
    return this.http.get(`${this.api_digimon}/name/${nome}`);
  }

  buscaLevel(level: String) {
    return this.http.get(`${this.api_digimon}/level/${level}`);
  }
}
