import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from "../../adminservice.service";
import { Properties } from "../../admin.model";
@Component({
  selector: 'app-propertylist',
  templateUrl: './propertylist.component.html',
  styleUrls: ['./propertylist.component.css']
})
export class PropertylistComponent implements OnInit {
   property = new Properties();
  constructor(private adminservice : AdminserviceService) { }

  ngOnInit() {
    
  }

}
