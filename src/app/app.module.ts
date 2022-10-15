import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewAllTrainComponent } from './view-all-train/view-all-train.component';
import { DemobindingComponent } from './demobinding/demobinding.component';
import {HttpClientModule} from '@angular/common/http';
const appRoutes:Routes=[
{
  path:"",component:ViewAllTrainComponent
},
{
  path:"demo",component:DemobindingComponent
}
]
@NgModule({
  declarations: [
    AppComponent,
    ViewAllTrainComponent,
    DemobindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
