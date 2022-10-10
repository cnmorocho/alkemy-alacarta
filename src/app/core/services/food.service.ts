import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AuthService } from 'src/app/auth/services/auth.service';
import { Response } from '../models/ResponseApi.interface';
import { Food } from '../models/ResponseApi.interface';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  private url: string = 'https://api.spoonacular.com/recipes/complexSearch';

  @Output()
  public foodEmitter: EventEmitter<Food>;

  menu: Food[] = [];

  // ! Luego usar el api key proporcionado por el AuthService
  private token: string = '5f66ee2aeff844a8b3afb81a230c1e7d';

  constructor(private http: HttpClient) {
    this.foodEmitter = new EventEmitter<Food>();
  }

  public searchFood(searchQuery: string): Observable<Food[]> {
    return this.http
      .get<Response>(
        `${this.url}?apiKey=${this.token}&query=${searchQuery}&number=5&addRecipeInformation=true`
      )
      .pipe(map((res: Response) => res.results));
  }

  // TODO: Comprobar que hallan al menos 2 platos veganos
  public addToMenu(food: Food) {
    if (this.menu.length <= 4) {
      this.menu.push(food);
    }
  }

  public removeFromMenu(id: number) {
    this.menu = this.menu.filter((elem) => elem.id == id);
  }

  public getMenu(): Food[] {
    return this.menu;
  }
}