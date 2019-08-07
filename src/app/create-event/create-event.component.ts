import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  // save(title) {
  //   let value = title;
  //   localStorage.setItem('title',value);
  //   console.log(value);
  // }

  // getTitle(){
  //   let value = localStorage.getItem('title');
  // }

  isChecked = true;

  minDate = new Date(2019, 7, 7);
  maxDate = new Date(2020, 6, 31);

  onchange($event) {
    console.log($event);
  }

  constructor() {}

  ngOnInit() {
  }

}
