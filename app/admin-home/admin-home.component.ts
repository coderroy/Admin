import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from "src/app/adminservice.service";

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css'],
  providers : [AdminserviceService]
})
export class AdminHomeComponent implements OnInit {

  constructor(private adminservice : AdminserviceService) { }

  ngOnInit() {
  }

}
