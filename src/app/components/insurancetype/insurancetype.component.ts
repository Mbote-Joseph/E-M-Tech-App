import { Component, OnInit } from '@angular/core';
import { Insurance } from './Insurance';

@Component({
  selector: 'app-insurancetype',
  templateUrl: './insurancetype.component.html',
  styleUrls: ['./insurancetype.component.css'],
})
export class InsurancetypeComponent implements OnInit {
  insurance: Insurance[] = [
    {
      id: 1,
      name: 'Life Insurance',
      description: 'Life Insurance Description',
      price: 100,
    },
    {
      id: 2,
      name: 'Health Insurance',
      description: 'Health Insurance Description',
      price: 200,
    },
    {
      id: 3,
      name: 'Car Insurance',
      description: 'Car Insurance Description',
      price: 300,
    },
    {
      id: 4,
      name: 'Home Insurance',
      description: 'Home Insurance Description',
      price: 400,
    },
    {
      id: 5,
      name: 'Travel Insurance',
      description: 'Travel Insurance Description',
      price: 500,
    },
    {
      id: 6,
      name: 'Pet Insurance',
      description: 'Pet Insurance Description',
      price: 600,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  // On card click function one is taken to the personal details page
  onCardClick() {
    console.log('Card Clicked');
  }
}
