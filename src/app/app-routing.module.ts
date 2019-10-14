import { NotFoundComponent } from './not-found/not-found.component';
import { NotesComponent } from './notes/notes.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: "not Found",
    component: NotFoundComponent
  },

  {

    path: "notes", component: NotesComponent


  }, {
    path: "feedback", component: FeedbackComponent

  },
  {

    path: "",
    redirectTo: "/notes",
    pathMatch: "full"

  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
