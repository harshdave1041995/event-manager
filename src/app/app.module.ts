import { EventsService } from './event-list/events.service';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule} from '@angular/forms';
import { MatNativeDateModule } from '@angular/material';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventListComponent } from './event-list/event-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { EventComponent } from './event/event.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'app-create-event', component: CreateEventComponent },
  { path: 'app-event-list', component: EventListComponent },
  { path: '',
    redirectTo: 'app-event-list',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
  ];

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    TopBarComponent,
    EventComponent,
    CreateEventComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    MatNativeDateModule,
    NgxMaterialTimepickerModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    EventsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
