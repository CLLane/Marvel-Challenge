import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { CreatorsComponent } from './creators/creators.component';


const routes: Routes = [{path: 'characters', component: CharactersComponent}, {path: 'creators', component: CreatorsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
