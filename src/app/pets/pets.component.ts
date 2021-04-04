import { Component, OnInit } from '@angular/core';
import { Pet } from '../pet';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {
  dog = 'Zeus';

  dogs?: Pet[];

  selectedDog?: Pet;

  constructor() {

  }

  ngOnInit(): void {
  }

  onSelectDog(dog: Pet): void {
    this.selectedDog = dog;
  }

}
