import { Observable} from 'rxjs';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Notebook } from './app/notes/notebook';

@Injectable({
  providedIn: 'root'
})
export class NotebookService {
url:string="http://localhost:8887/api/notebooks/all"

url2:string="http://localhost:8887/api/notes/all"
  constructor(private http:HttpClient) { }

public getallnote():Observable<any>{
return this.http.get(this.url2)


}
public getallnotebooks(){

return this.http.get<Notebook[]>(this.url)


}


}
