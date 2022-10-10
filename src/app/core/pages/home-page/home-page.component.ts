import { Component, OnInit, OnChanges } from '@angular/core';

import { FoodService } from '../../services/food.service';
import { Food } from '../../models/ResponseApi.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  menu: Food[] = [];

  constructor(private foodService: FoodService) {}

  ngOnInit(): void {
    this.addToMenu();
    console.log(this.menu);
  }

  addToMenu() {
    this.menu = this.foodService.getMenu();
  }
}
