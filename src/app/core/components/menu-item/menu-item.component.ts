import { Component, Input, OnInit } from '@angular/core';
import { Food } from '../../models/ResponseApi.interface';
import { FoodService } from '../../services/food.service';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
})
export class MenuItemComponent implements OnInit {
  @Input() item!: Food;

  constructor(private foodService: FoodService) {}

  ngOnInit(): void {}

  removeItem(): void {
    this.foodService.removeFromMenu(this.item.id);
  }
}
