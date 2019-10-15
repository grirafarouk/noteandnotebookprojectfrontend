import { Notebook } from './notebook';
import { Component, OnInit } from '@angular/core';
import { NotebookService } from 'src/notebook.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  listenotebooks = []
  listenotes = []
  searchText:string

  constructor(private note: NotebookService) { }

  ngOnInit() {
    this.getallnotes()
    this.getAllNotesBooks()
  }
  public getallnotes() {
    this.note.getallnote().subscribe(data => {
      this.listenotes = data
    }
    )

  }
  public searchingNotebook2(value) {
    let v:string=value.target.value 
    console.log(v)
    if (value.target.value != "") {
      this.listenotebooks = this.listenotebooks.filter(data => {
        return data.name
      })

    }
    else {
      this.getAllNotesBooks();
    }
  }
  public searchingNotebook(event){
    if(event.target.value!=""){
  this.note.searchNotebooks(event.target.value).subscribe(data=>{
console.log(data)
this.listenotebooks=data

  })}
else {
this.getAllNotesBooks()

}

  }



  public getAllNotesBooks() {
    this.note.getallnotebooks().subscribe(data => {
      this.listenotebooks = data
    },
      error => {
        alert('an error has been occcured')
      },
      () => {
        console.log('okk')
      });


  }


  public createNotebook() {
    let newbook: Notebook = {
      id: null,
      name: "new Notebook",
      nbOfNotes: 0
    }

    this.note.createNotebook(newbook).subscribe(data => {

      newbook.id = data.id
      this.listenotebooks.push(newbook)
    }),
      err => {
        alert("une errreur se produit lors de l'enregistrement d' un notebook")
      }

  }



  public deleteNotebook(notebook: any) {

    this.note.deleteNotebook(notebook.id).subscribe(data => {
      console.log(data)
      this.listenotebooks = data


    })
    err => {

      alert("une erreur se produit lors de la supprission d'un notebook")

    }
  }


  public updateNotebook(notebook: Notebook) {
    this.note.createNotebook(notebook).subscribe(data => { }, err => { alert("une erreur se produit lors de la ise a jour d'une notebook") })


  }


  public resetall(){
this.searchText=""
this.getAllNotesBooks()

  }
}
