import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Userlog } from './userlog';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class SharedService {
// readonly APIUrl="https://localhost:44358/api/Registration";
// readonly PhotoUrl = "http://localhost:53535/Photos/";

  constructor(private http:HttpClient) { }

  getData():Observable<any[]>{
      return this.http.get<any>(`${environment.apibaseURL}api/Registration`);
    }
  

    enroll(Userlog: Userlog){
        return this.http.post<any>(`${environment.apibaseURL}api/Registration`,Userlog);
    }

    updateDepartment(val:any){
      return this.http.put(`${environment.apibaseURL}api/Registration`,val);
    }
  
    deleteDepartment(val:any){
      return this.http.delete(`${environment.apibaseURL}api/Registration`, val);
    }

  // enroll(Userlog: Userlog){
  //   return this.http.post<any>(this.APIUrl+'api/Registration', Userlog);
  // }

  // getInvoice():Observable<any[]>{
  //   return this.http.get<any>(this.APIUrl+'/Registration');
  // }

  // addInvoice(val:any){
  //   return this.http.post(this.APIUrl+'/Registration',val);
  // }

  // updateInvoice(val:any){
  //   return this.http.put(this.APIUrl+'/Registration',val);
  // }

  // deleteInvoice(val:any){
  //   return this.http.delete(this.APIUrl+'/Registration/'+val);
  // }

  

  // getEmpList():Observable<any[]>{
  //   return this.http.get<any>(this.APIUrl+'/Employee');
  // }

  // addEmployee(val:any){
  //   return this.http.post(this.APIUrl+'/Employee',val);
  // }

  // updateEmployee(val:any){
  //   return this.http.put(this.APIUrl+'/Employee',val);
  // }

  // deleteEmployee(val:any){
  //   return this.http.delete(this.APIUrl+'/Employee/'+val);
  // }


  // UploadPhoto(val:any){
  //   return this.http.post(this.APIUrl+'/Employee/SaveFile',val);
  // }

  // getAllDepartmentNames():Observable<any[]>{
  //   return this.http.get<any[]>(this.APIUrl+'/Employee/GetAllDepartmentNames');
  // }

}








// @Injectable({
//   providedIn: 'root'
// })
// export class SharedService {

//   constructor() { }
// }
