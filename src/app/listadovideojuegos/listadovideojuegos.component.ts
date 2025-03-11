import { Component, OnInit, Inject, NgModule } from '@angular/core';
import { ApiService } from '../service/rawg.service';
import { Game, ApiResponse } from '../rawg-interfaces';


@Component({
  selector: 'app-listadovideojuegos',
  standalone: false,
  templateUrl: './listadovideojuegos.component.html',
  styleUrl: './listadovideojuegos.component.css'
})
export class ListadovideojuegosComponent implements OnInit {
  public games: Game[] = []; // Para almacenar los datos de los videojuegos que devuelve la API
  public filteredGames: Game[] = [];
  public searchQuery: string = '';
  public currentPage: number = 1;
  public pageSize: number = 20;
  public totalGames: number = 0;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getGamesAll();
  }

  getGamesAll(): void {
    this.apiService.getGames(this.pageSize, this.currentPage)
      .subscribe((resp: ApiResponse) => {
        this.games = resp.results;
        this.filteredGames = this.games;
        this.totalGames = resp.count;
      });
  }

  filterGames(): void {
    this.filteredGames = this.games.filter((game: Game) =>
      game.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  goToPage(pageNumber: number): void {
    if (pageNumber >= 1 && pageNumber <= Math.ceil(this.totalGames / this.pageSize)) {
      this.currentPage = pageNumber;
      this.apiService.getGames(this.pageSize, this.currentPage)
        .subscribe((resp: ApiResponse) => {
          this.games = resp.results;
          this.filteredGames = this.games;
        });
    }
  }

  goToFirstPage(): void {
    this.goToPage(1);
  }

  goToLastPage(): void {
    this.goToPage(Math.ceil(this.totalGames / this.pageSize));
  }

  goToPreviousPage(): void {
    this.goToPage(this.currentPage - 1);
  }

  goToNextPage(): void {
    this.goToPage(this.currentPage + 1);
  }

  getGenres(game: Game): string {
    return game.genres.map(genre => genre.name).join(', ');
  }

  getWallpapers(game: any): string[] {
    let wallpapers: string[] = [];
    for (let i = 0; i < Math.min(game.short_screenshots.length, 2); i++) { //Con Math.min en caso de haber solo 1 wallpaper en ese resultado devuelve el valor minimo de resultados que encuentra que será 1 en lugar del maximo que permite que es 2
      wallpapers.push(game.short_screenshots[i].image);
    }
    return wallpapers;
  }

  getStoreNames(game: any): string {
    let storeNames = '';
    for (let i = 0; i < game.stores.length; i++) {
      if (i > 0) {
        storeNames += ', ';
      }
      storeNames += game.stores[i].store.name;
    }
    return storeNames;
  }
}
