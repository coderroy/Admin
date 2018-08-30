import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from "src/app/adminservice.service";
import { Users } from "src/app/admin.model";

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  constructor(private adminservice :AdminserviceService) { }

  ngOnInit() {
    this.adminservice.get_users().subscribe(data => {
      this.adminservice.users = data as Users[];
      console.log(this.adminservice.users);
    });
  }

}
