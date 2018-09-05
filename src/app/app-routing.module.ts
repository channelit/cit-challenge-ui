import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {SkillsComponent} from './skills/skills.component';
import {SplashComponent} from './splash/splash.component';

const routes: Routes = [
  {
    path: '',
    component: SplashComponent,
    children: [
      {
        path: 'skills',
        component: SkillsComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
