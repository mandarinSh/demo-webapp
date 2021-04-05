import { Component, OnInit } from '@angular/core';
import { Pet } from '../pet';
import { PetsService } from '../pets.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {
  // dog = 'Zeus';

  dogs: Pet[] = [];

  constructor(private service: PetsService) { }

  ngOnInit(): void {
    this.getDogs();
  }

  getDogs(): void {
    this.service.getDogs()
      .subscribe(dogs => this.dogs = dogs);
  }
}
