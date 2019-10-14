import { ApidserviiceService } from './../shared/apidserviice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
model:feedbackViewModel={
name:"",
email:"",
feedback:""
}
  constructor(private apiService:ApidserviiceService) { }

  ngOnInit() {
  }

  sendFeedback(): void {
    console.log(this.model)
    this.apiService.postfeedback(this.model).subscribe(
      res => {
        location.reload();
      },
      err => {
console.log(err)
        alert("An error has occurred while sending feedback");
      }
    );
  }

}

export class feedbackViewModel{
name:string;
email:string;
feedback:string;


}