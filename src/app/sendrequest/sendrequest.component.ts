import { Component, OnInit } from '@angular/core';
import { PanchayatserviceService } from '../panchayatservice.service';

@Component({
  selector: 'app-sendrequest',
  templateUrl: './sendrequest.component.html',
  styleUrls: ['./sendrequest.component.css']
})
export class SendrequestComponent implements OnInit {

  data1={

    requestname:"",
    vid:"",
    facilitytype:"",
    userequest:""


  }

  constructor(private api:PanchayatserviceService) { }

  ngOnInit(): void {
  }
  
  Request(){

    this.api.request(this.data1).subscribe((data)=>{

    })
  alert("Success")
  }

}
