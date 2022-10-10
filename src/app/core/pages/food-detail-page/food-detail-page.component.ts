import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Food } from '../../models/ResponseApi.interface';
import { FoodService } from '../../services/food.service';

@Component({
  selector: 'app-food-detail-page',
  templateUrl: './food-detail-page.component.html',
  styleUrls: ['./food-detail-page.component.scss'],
})
export class FoodDetailPageComponent implements OnInit {
  foodId!: number;
  food: Food | undefined;

  constructor(
    private route: ActivatedRoute,
    private foodService: FoodService
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.foodId = this.route.snapshot.params['id'];
    this.foodService.findById(this.foodId).subscribe((res: Food) => {
      this.food = res;
    });
  }
}
