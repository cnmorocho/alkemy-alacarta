import { Component, OnInit, OnChanges } from '@angular/core';

import { FoodService } from '../../services/food.service';
import { Food } from '../../models/ResponseApi.interface';
import { Menu } from '../../models/Menu';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  menu: Menu = new Menu();
  totalPrice: number = 0;

  constructor(private foodService: FoodService) {}

  ngOnInit(): void {
    this.menu = this.foodService.getMenu();
  }
}
