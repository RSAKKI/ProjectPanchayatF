import { Component, OnInit } from '@angular/core';
import { PanchayatserviceService } from '../panchayatservice.service';

@Component({
  selector: 'app-userwelcome',
  templateUrl: './userwelcome.component.html',
  styleUrls: ['./userwelcome.component.css']
})
export class UserwelcomeComponent implements OnInit {

  constructor(private aci:PanchayatserviceService) {

    aci.newsview().subscribe(()=>
   {
      this.datan.response
   })
   }


  ngOnInit(): void {
  }
  datan:any=[]

}
