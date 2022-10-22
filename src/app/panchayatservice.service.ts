import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PanchayatserviceService {

  constructor(private http:HttpClient ) {}
  
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
  
  userview=()=>{
    return this.http.get('http://localhost:3000/userview')
  }

  newsview=()=>{
    return this.http.get('http://localhost:3000/newsview')
  }
  }












