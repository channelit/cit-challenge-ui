import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SkillsComponent} from './skills/skills.component';
import {AuthComponent} from './auth/auth.component';
import {SplashComponent} from './splash/splash.component';
import {HeaderComponent} from './layout/header/header.component';
import {MenuComponent} from './layout/menu/menu.component';
import {AppModuleIncludeMaterial} from './app.module.include.material';
import { AddUserComponent } from './add-user/add-user.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    AuthComponent,
    SplashComponent,
    HeaderComponent,
    MenuComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppModuleIncludeMaterial
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
