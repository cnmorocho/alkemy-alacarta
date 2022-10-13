import { Component, Input, OnInit } from '@angular/core';

import { Food } from '../../models/ResponseApi.interface';
import { FoodService } from '../../services/food.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent implements OnInit {
  @Input() item!: Food;

  constructor(public foodService: FoodService) {}

  ngOnInit(): void {}

  addItem() {
    this.foodService.addToMenu(this.item);
  }
}
