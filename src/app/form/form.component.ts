import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Employee } from '../Model/employee.model';
import { empty } from 'rxjs/Observer';
import { indexDebugNode } from '@angular/core/src/debug/debug_node';

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



emp = [];
Add(form: NgForm) {
  console.log(form.value);
this.emp.push(form.value);

  console.log(this.emp);
  this.Name = '';
  this.Email = '';
  this.Contact = null;
}

  ngOnInit() {
  }

}
