import { Component, OnInit } from '@angular/core';

import { FoodService } from '../../services/food.service';
import { Food } from '../../models/ResponseApi.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  menu: Array<Food>; 

  constructor(private foodService: FoodService) { 
    this.menu = [];
  }

  ngOnInit(): void {
    this.menu = this.foodService.getMenu()
  }


}
