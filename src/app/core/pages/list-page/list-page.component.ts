import { Component, OnInit } from '@angular/core';
import { Food } from '../../models/ResponseApi.interface';
import { FoodService } from '../../services/food.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss'],
})
export class ListPageComponent implements OnInit {
  foodList: Food[];

  constructor(private foodService: FoodService) {
    this.foodList = [];
  }

  ngOnInit(): void {}

  handleSearch(value: string) {
    this.foodService
      .searchFood(value)
      .subscribe((res) => (this.foodList = res));
  }
}
