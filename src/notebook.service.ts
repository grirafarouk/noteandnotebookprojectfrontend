import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Notebook } from './app/notes/notebook';

@Injectable({
  providedIn: 'root'
})
export class NotebookService {
  url: string = "http://localhost:8887/api/notebooks/all"

  url2: string = "http://localhost:8887/api/notes/all"
  notebookurl3: string = "http://localhost:8887/api/notebooks/create"
  notebookdurl4: string = "http://localhost:8887/api/notebooks/"
  notebookdurl5: string = "http://localhost:8887/api/notebooks/getByname/"

  constructor(private http: HttpClient) { }

  public getallnote(): Observable<any> {
    return this.http.get(this.url2)


  }
  public getallnotebooks() {

    return this.http.get<Notebook[]>(this.url)


  }

  public createNotebook(notebook: any): Observable<any> {
    return this.http.post(this.notebookurl3, notebook)
  }

  public deleteNotebook(notebookId: any): Observable<any> {
    if (confirm("Are you sure you want to delete notebook?")) {

      return this.http.delete(this.notebookdurl4 + notebookId)

    }
  }
  //delete notebook autre methode
  /**deleteNotebook(notebook: Notebook) {
    if(confirm("Are you sure you want to delete notebook?")){
      this.apiService.deleteNotebook(notebook.id).subscribe(
        res => {
          let indexOfNotebook = this.notebooks.indexOf(notebook);
          this.notebooks.splice(indexOfNotebook,1);
        },
        err => {
          alert("Could not delete notebook");
        }
      );
    }
  }**/

  public searchNotebooks(name: any): Observable<any> {
    return this.http.get(this.notebookdurl5 + name)


  }
}
