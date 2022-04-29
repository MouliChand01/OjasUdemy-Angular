import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OjasSerService } from '../ojas-ser.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  empObject:any;
  completeCourseList:any;

  constructor(private ser:OjasSerService,private router:Router) { }

  ngOnInit(): void {
      // ##########################################
      //  we are getting dataObject and CoureseList
      // ###########################################
    this.ser.getObject().subscribe((data)=>{this.empObject=data.text,console.log("courseList",data)});             
    this.ser.getCourseList().subscribe((val)=>this.completeCourseList=val.text);
  }

  logout(){
   this.router.navigate(['signin'])
  }

}
