import { Component } from '@angular/core';
import { catchError, of } from 'rxjs';
import { Digimon } from 'src/app/models/digimon-model/digimon.model';
import { ListarDigimonsService } from 'src/app/services/listar-digimons.service';

@Component({
  selector: 'app-listar-digimons',
  templateUrl: './listar-digimons.component.html',
  styleUrls: ['./listar-digimons.component.css'],
})
export class ListarDigimonsComponent {
  digimon: Digimon | null = null;
  digimons: Digimon[] = [];
  digimonNome: String = '';
  digimonLevel: String = '';
  digimonNaoExiste: boolean | null = null;

  levels = [
    'In Training',
    'Rookie',
    'Champion',
    'Ultimate',
    'Fresh',
    'Mega',
    'Training',
    'Armor',
  ];

  constructor(private listarDigimonsService: ListarDigimonsService) {}

  buscaNome() {
    this.digimonNome = this.digimonNome.trim();

    this.listarDigimonsService
      .buscaNome(this.digimonNome)
      .pipe(
        catchError((error) => {
          console.error(error);
          this.digimonNaoExiste = true;
          this.digimonNome = '';
          this.digimons = [];
          return of(null);
        })
      )
      .subscribe((response: Digimon | any) => {
        if (response) {
          this.digimon = response[0];
          this.digimonNaoExiste = false;
          this.digimonNome = '';
          this.digimons = [];
        }
      });
  }

  buscaLevel() {
    this.listarDigimonsService
      .buscaLevel(this.digimonLevel)
      .pipe(
        catchError((error) => {
          console.error(error);
          return of(null);
        })
      )
      .subscribe((response: Digimon[] | any) => {
        if (response && response.length > 0) {
          this.digimons = response;
          this.digimon = null;
          this.digimonNaoExiste = false;
        }
      });
  }
}
