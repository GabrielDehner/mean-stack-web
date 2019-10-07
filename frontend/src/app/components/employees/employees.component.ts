import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import {NgForm} from "@angular/forms";
import {Employee} from "../../models/employee";

//para usar materialize
declare var M: any;

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers: [EmployeeService]
})



export class EmployeesComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployees();
  }

  addEmployee(form?: NgForm) {
    console.log(form.value);
    if(form.value._id) {
      this.employeeService.putEmployee(form.value)
        .subscribe(res => {
          this.resetForm(form);
          this.getEmployees();
          M.toast({html: 'Actualizado correctamente'});
        });
    } else {
      this.employeeService.postEmployee(form.value)
        .subscribe(res => {
          this.getEmployees();
          this.resetForm(form);
          M.toast({html: 'Guardado correctamente'});
        });
    }

  }
  getEmployees(){
    this.employeeService.getEmployees()
      .subscribe(res =>{
        this.employeeService.employees = res as Employee[];
        console.log(res);
      })
  }
  editEmployee(employee: Employee){
    this.employeeService.selectedEmployee = employee;
  }

  deleteEmployee(_id: string){
    if(confirm('Estas seguro de querer eliminarlo?')){
      this.employeeService.deleteEmployee(_id)
        .subscribe(res=>{
          this.getEmployees();
          M.toast({html: 'Eliminado satisfactoriamente'});
        });
    }
  }

  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.employeeService.selectedEmployee = new Employee();
    }

  }

}

