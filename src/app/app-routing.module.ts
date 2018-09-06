import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {SkillsComponent} from './skills/skills.component';
import {SplashComponent} from './splash/splash.component';
import {AddUserComponent} from './add-user/add-user.component';

const routes: Routes = [
  {
    path: '',
    component: SplashComponent,
    children: [
      {
        path: 'skills',
        component: SkillsComponent
      },
      {
        path: 'add-user',
        component: AddUserComponent
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
