import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import {FlashcardListComponent} from './flashcard-list/flashcard-list.component';
import {FlashcardComponent} from './flashcard/flashcard.component';
import {NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
 
  {
    path: 'flashcard/:number',
    component: FlashcardComponent
  },
  {
    path: 'flashcard-directory/:user',
    component: FlashcardListComponent
  },
  {
    path: 'flashcard',
    component: FlashcardComponent
  },
  {
    path: '',
    redirectTo: '/flashcard/1',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
