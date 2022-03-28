import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatButtonModule} from '@angular/material/button'
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TrackLookupComponent } from './track-lookup/track-lookup.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TrackLookupComponent,
    AboutComponent
  ],
  imports: [
    MatProgressBarModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatToolbarModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
