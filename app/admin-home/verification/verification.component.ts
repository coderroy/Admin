import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from "src/app/adminservice.service";
import { Properties } from "src/app/admin.model";

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {

  constructor(private adminservice : AdminserviceService) { }

  ngOnInit() {
    this.adminservice.get_UnverifiedProperties()
    .subscribe(data => {this.adminservice.unverfiedproperties = data as Properties[]
    console.log(this.adminservice.unverfiedproperties);
    });
  }
  verify(property: Properties) {
    this.adminservice.selectedproperty =  property;
    this.adminservice.verifyproperty(this.adminservice.selectedproperty);
  }

}
