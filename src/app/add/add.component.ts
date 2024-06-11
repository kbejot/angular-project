import { Component, OnInit } from '@angular/core';
import { FormsModule,  FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})

export class AddComponent implements OnInit {
  titleToAdd = new FormControl('');
  priceToAdd = new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    const newTitle = this.titleToAdd.value;
    const newPrice = this.priceToAdd.value;
    console.log("newTitle : " + newTitle);
    console.log("newPrice : " + newPrice);
  }

}