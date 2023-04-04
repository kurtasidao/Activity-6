import { Component, OnInit, Input } from '@angular/core';

import { Observable } from "rxjs";
import { EmployeeService } from "../employee.service";
import { Employee } from "../employee";
import { Router } from '@angular/router';

@Component({
  selector: '[app-employee-list]',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  @Input() element: {id?: number, number?: string, firstName?: string, lastName?: string, birthday?: Date, Gender?: string, Picture?: string, Active?: boolean};
  
  constructor() {}
  ngOnInit() {}  
                                    
  deleteEmployee(id: number) {
    
  }

  employeeDetails(id: number){
    
  }
}