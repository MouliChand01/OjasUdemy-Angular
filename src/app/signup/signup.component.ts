import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OjasSerService } from '../ojas-ser.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  submitted = false;
  registerForm: any;
  employeeData: any;

  constructor(private formBilder: FormBuilder, private router: Router, private ser: OjasSerService) { }
  ngOnInit(): void {
    this.registerForm = this.formBilder.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
      empid: new FormControl('', Validators.required),
      role: new FormControl('', Validators.required),
      batch: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    })
    // this.ser.getEmployee().subscribe((data) => this.employeeData = data);
  }

  newData() {
    this.submitted = true;
    // let object = this.employeeData.find((val: any) => val.empid === this.registerForm.empid);
    // console.log("empid :",this.registerForm.empid)
    // console.log("empid :",object.empid)
    // if (object) {
    //   alert("Based on the employee id user already in database")
    // }
    // else { 
    // }
      alert(`${this.registerForm.value.name} done your registration..`);
      this.ser.postEmployee(this.registerForm.value).subscribe();
      this.router.navigate(['signin']);
    
  }
}
