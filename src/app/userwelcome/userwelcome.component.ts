import { Component, OnInit } from '@angular/core';
import { PanchayatserviceService } from '../panchayatservice.service';

@Component({
  selector: 'app-userwelcome',
  templateUrl: './userwelcome.component.html',
  styleUrls: ['./userwelcome.component.css']
})
export class UserwelcomeComponent implements OnInit {

  constructor(private ali:PanchayatserviceService) {

    ali.newsview().subscribe((response)=>{this.data2=response})
   }

  ngOnInit(): void {
  }
  data2:any=[]
}
