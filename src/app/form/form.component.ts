import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Employee } from '../Model/employee.model';
import { empty } from 'rxjs/Observer';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
Name: string;
Email: string;
Contact: number;
  constructor() { }
emp: Employee;
Add(form: NgForm) {

  this.emp = form.value;
  console.log(this.emp);
  this.Name = '';
  this.Email = '';
  this.Contact = null;
}

  ngOnInit() {
  }

}
