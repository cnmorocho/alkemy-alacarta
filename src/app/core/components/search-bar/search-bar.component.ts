import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { pipe } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { Food } from '../../models/ResponseApi.interface';
import { FoodService } from '../../services/food.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  searchControl: FormControl;

  @Output() searchEmmiter: EventEmitter<string>;

  constructor() { 
    this.searchControl = new FormControl('', Validators.minLength(3))
    this.searchEmmiter = new EventEmitter<string>()
  }

  ngOnInit(): void {
    this.searchControl.valueChanges
    .pipe(debounceTime(1200))
    .subscribe( value => {
      if(this.searchControl.valid && this.searchControl.value != "")
        this.searchEmmiter.emit(value)
    } )
  }
  

}
