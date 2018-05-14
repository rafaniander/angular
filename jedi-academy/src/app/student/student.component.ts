import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jad-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  name = 'Luke'; // string
  isJedi = true; // boolean

  constructor() { }

  ngOnInit() {
  }

}
