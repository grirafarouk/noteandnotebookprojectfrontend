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
}
