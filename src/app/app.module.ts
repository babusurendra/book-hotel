import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { OrganizersComponent } from './components/organizers/organizers.component';
import { appRouter } from './app.router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OrganizersComponent
  ],
  imports: [
    BrowserModule,appRouter
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
