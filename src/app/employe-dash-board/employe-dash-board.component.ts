import { Component, OnInit } from '@angular/core';
import { OjasSerService } from '../ojas-ser.service';


@Component({
  selector: 'app-employe-dash-board',
  templateUrl: './employe-dash-board.component.html',
  styleUrls: ['./employe-dash-board.component.css']
})
export class EmployeDashBoardComponent implements OnInit {
  EmployeData: any;
  techList = [{ 'Name': "Java Script" }, { 'Name': "Html" }, { 'Name': "css" }, { 'Name': "Python" }, { 'Name': "Angular" }];
  loadData: any;
  hide = true;
  LengthIs: any;
  value = 0;
  value1 = 0;
  array:any=[];
  arrayCourseList:any=[];

  constructor(private ser: OjasSerService) { }

  ngOnInit(): void {
    this.ser.getObject().subscribe((data) => this.EmployeData = data.text)

  }

  selectedTech(tech: any) {
    this.hide = false;
    if (tech === "Html") {
      this.arrayCourseList.push("Html Course");
      setTimeout(() => {
        this.ser.getHtml().subscribe((data) => {
          this.value = 0
          this.loadData = data
          this.LengthIs = this.loadData.length;
          this.value1 = 100 / this.LengthIs;
        });
      }, 1000);
    }
    else if (tech === "css") {
      this.arrayCourseList.push("Css Course");
      setTimeout(() => {
        this.ser.getcss().subscribe((data) => {
          this.value = 0                              // for progress value that's why
          this.loadData = data                        // load partcular course via clicking
          this.LengthIs = this.loadData.length;       
          this.value1 = 100 / this.LengthIs           // based on the length we will get partcular video length
        });
      }, 1000);

    }
    else if (tech === "Java Script") {
      this.arrayCourseList.push("JavaScript Course");
      setTimeout(() => {
        this.ser.getJavascript().subscribe((data) => {
          this.value = 0
          this.loadData = data
          this.LengthIs = this.loadData.length;
          this.value1 = 100 / this.LengthIs;
         });
      }, 1000);
    }
    else if (tech === "Python") {
      this.arrayCourseList.push("Python Course");
      setTimeout(() => {
        this.ser.getpython().subscribe((data) => {
          this.value = 0
          this.loadData = data
          this.LengthIs = this.loadData.length;
          this.value1 = 100 / this.LengthIs;
         });
      }, 1000);

    }
    else if (tech === "Angular") {
      this.arrayCourseList.push("Angular Course");
      setTimeout(() => {
        this.ser.getangular().subscribe((data) => {
          this.value = 0
          this.loadData = data
          this.LengthIs = this.loadData.length;
          this.value1 = 100 / this.LengthIs;
        });
      }, 1000);
    }
  }

  videoended(id: any) {
    if (!this.array.includes(id)) {
      this.array.push(id);
      this.value += this.value1;
    }
  }

  gotoProfile(){
    this.ser.sendCourseList(this.arrayCourseList);
  }


}
