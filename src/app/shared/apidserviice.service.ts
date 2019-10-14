import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable } from 'rxjs';
import { feedbackViewModel } from '../feedback/feedback.component';

@Injectable({
  providedIn: 'root'
})
export class ApidserviiceService {

  constructor(private http:HttpClient) { }

public postfeedback(feedback:feedbackViewModel)
{

return this.http.post("http://localhost:8887/api/feedback/mail",feedback)

}
}
