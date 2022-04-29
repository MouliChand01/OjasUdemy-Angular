import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OjasSerService } from '../ojas-ser.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  LoadData: any;
  empid: any;
  newpassword: any;
  object:any;
  show = false;
  show1 = true;
  show2 = false;

  constructor(private ser: OjasSerService, private router: Router) { }
  ngOnInit(): void {
  }

  getEmployeeData() {
    this.ser.getEmployee().subscribe((data) => {
      this.LoadData = data;
      this.object = this.LoadData.find((val: any) => val.empid === this.empid);
      if (this.object) {
        this.show = true;
        this.show1 = false;
        this.show2 = true;
      }
      else{
        alert('u have not a account register yourself')
      }
    })
  }

  upDatePassword(){
    if(this.object){
      this.object.password = this.newpassword;
      this.ser.updateEmployee(this.object,this.object.id).subscribe();
      alert(`${this.object.name} ur password was updated sucessfully `);
      this.router.navigate(['signin'])
    }

  }

}
