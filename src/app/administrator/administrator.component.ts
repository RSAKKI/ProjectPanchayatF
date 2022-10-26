import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PanchayatserviceService } from '../panchayatservice.service';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css']
})
export class AdministratorComponent implements OnInit { 

  data1={

    adminname:"",
    adminpassword:""

  }

  constructor(private api:PanchayatserviceService, private router:Router) { }

  ngOnInit(): void {
  }
  Alogin(){

    this.api.alogin(this.data1).subscribe((data1)=>{
      if(data1.success===true){
        this.api.Saveadmin(data1)
        this.router.navigate(['/aw'])
      }
      else {
        alert(data1.success)
      }
    })

  }

}
