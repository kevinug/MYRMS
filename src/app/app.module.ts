import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RoomCardComponent } from './room-card/room-card.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { RoomService } from './room.service';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RoomCardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    RoomService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
