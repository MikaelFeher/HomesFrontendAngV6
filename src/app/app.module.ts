import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { DataService } from './services/data.service';

import { AppComponent } from './app.component';
import { HomesComponent } from './components/homes/homes.component';
import { HouseComponent } from './components/house/house.component';

@NgModule({
  declarations: [
    AppComponent,
    HomesComponent,
    HouseComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomesComponent
      },
      {
        path: 'homes/:id',
        component: HouseComponent
      },
      {
        path: '**',
        redirectTo: '' 
      }
    ])
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
