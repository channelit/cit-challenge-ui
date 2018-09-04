import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {SkillsComponent} from './skills/skills.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'skills',
        component: SkillsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
