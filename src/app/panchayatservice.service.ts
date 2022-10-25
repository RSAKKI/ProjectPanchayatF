import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PanchayatserviceService {

  constructor(private http:HttpClient ) {}

  User:any

  public Saveuser(data:any):any{

    this.User=data
    console.log("abc")
  }

  Retriveuser(){

    console.log("123")
    return this.User
  }
  
  usignup(data:any){

    return this.http.post<any>('http://localhost:3000/us',data)

  }
  ulogin(data3:any){

    return this.http.post<any>('http://localhost:3000/ulogin',data3)

  }

  asignup(dataa:any){

    return this.http.post<any>('http://localhost:3000/as',dataa)

  }

  alogin(data2:any){
    return this.http.post<any>('http://localhost:3000/alogin',data2)
  }
    
  usernews(datan:any){

    return this.http.post<any>('http://localhost:3000/n',datan)

  }

  request(data1:any){

    return this.http.post<any>('http://localhost:3000/sq',data1)

  }
  Approve=(i:any)=>{
    return this.http.put<any>('http://localhost:3000/approveview/'+i._id,i)
  }

  Deny=(i:any)=>{

    return this.http.delete<any>('http://localhost:3000/deleteview/'+i._id)

  }

  requestview=()=>{
    return this.http.get('http://localhost:3000/requestview')
  }
  
  userview=()=>{
    return this.http.get('http://localhost:3000/userview')
  }

  newsview=()=>{
    return this.http.get('http://localhost:3000/newsview')
  }
  }












