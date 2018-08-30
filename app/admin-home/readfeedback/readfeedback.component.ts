import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from "src/app/adminservice.service";
import { FeedBackPosts } from "src/app/admin.model";

@Component({
  selector: 'app-readfeedback',
  templateUrl: './readfeedback.component.html',
  styleUrls: ['./readfeedback.component.css']
})
export class ReadfeedbackComponent implements OnInit {

  constructor(private adminservice :AdminserviceService) { }

  ngOnInit() {
    this.adminservice.get_feedbacks().subscribe( data => {
      this.adminservice.feedbacks = data;
      console.log(this.adminservice.feedbacks);
    })
  }

  deletefeedback(feedbacks : FeedBackPosts){
    this.adminservice
  }


}
