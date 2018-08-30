import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from "src/app/adminservice.service";
import { Users, Owners } from "src/app/admin.model";

@Component({
  selector: 'app-ownerlist',
  templateUrl: './ownerlist.component.html',
  styleUrls: ['./ownerlist.component.css']
})
export class OwnerlistComponent implements OnInit {

  constructor(private adminservice : AdminserviceService) { }

  ngOnInit() {
    this.adminservice.get_owners().subscribe(data => {
      this.adminservice.owners = data as Owners[];
      console.log(this.adminservice.owners);
      console.log(data);
    });
  }

}
