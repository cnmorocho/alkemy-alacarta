import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AuthService } from 'src/app/auth/services/auth.service';
import { Response } from '../models/ResponseApi.interface';
import { Food } from '../models/ResponseApi.interface';
import { Menu } from '../models/Menu';
import { FoodDetails } from '../models/FoodDetails.interface';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  private url: string = 'https://api.spoonacular.com/recipes';
  menu: Menu = new Menu();

  // ! Luego usar el api key proporcionado por el AuthService
  private token: string = '5f66ee2aeff844a8b3afb81a230c1e7d';

  constructor(private http: HttpClient) {}

  public searchFood(searchQuery: string): Observable<Food[]> {
    return this.http
      .get<Response>(
        `${this.url}/complexSearch?apiKey=${this.token}&query=${searchQuery}&number=5&addRecipeInformation=true`
      )
      .pipe(map((res: Response) => res.results));
  }

  public findById(id: number): Observable<FoodDetails> {
    return this.http.get<FoodDetails>(
      `${this.url}/${id}/information?apiKey=${this.token}`
    );
  }

  public addToMenu(food: Food) {
    this.menu.addToMenu(food);
  }

  public removeFromMenu(id: number): void {
    this.menu.removeFromMenu(id);
  }

  public getMenu(): Menu {
    return this.menu;
  }
}
