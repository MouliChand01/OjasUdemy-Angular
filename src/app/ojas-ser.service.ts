import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OjasSerService {

  Employee="http://localhost:3000/EmployeeData";
  Javascript="http://localhost:3000/JavaSeriptCourse";
  Html="http://localhost:3000/HtmlCourse";
  css="http://localhost:3000/CssCourse";
  python="http://localhost:3000/PythonCourse";
  angular="http://localhost:3000/AngularCourse";

  constructor(private http:HttpClient) { }

  private subject = new BehaviorSubject<any>('Hello');
  private subjuct1 =new BehaviorSubject<any>('Hello')
  
  //  ########## getting data ######## //
  getEmployee(){
    return this.http.get(this.Employee)
  }
  getJavascript(){
    return this.http.get(this.Javascript)
  }
  getHtml(){
    return this.http.get(this.Html)
  }
  getcss(){
    return this.http.get(this.css)
  }
  getpython(){
    return this.http.get(this.python)
  }
  getangular(){
    return this.http.get(this.angular)
  }

  //  ########## posting data ######## //

  postEmployee(data:any){
    return this.http.post(this.Employee,data)

  }

  //  ########## updateing data ######## //
   updateEmployee(data:any,id:any){
     return this.http.put(`${this.Employee}/${id}`,data)
   }

   //  ########## object send to dashBoard ######## //

   getObject(){
    return this.subject.asObservable()
   }

   sendObject(data:any){
    return this.subject.next({text:data})
   }
  
  //  ########## array send to profilePage ######## //
   sendCourseList(data:any){
     return this.subjuct1.next({text:data})
   }

   getCourseList(){
     return this.subjuct1.asObservable()
   }

}
