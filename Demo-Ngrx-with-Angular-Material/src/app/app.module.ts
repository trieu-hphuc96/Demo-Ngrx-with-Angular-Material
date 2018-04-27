import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DialogContentComponent } from './take-a-tour/components/dialog/dialog-content/dialog-content.component';
import { DialogComponent } from './take-a-tour/components/dialog/dialog.component';
import { StoreModule } from '@ngrx/store';


import { reducers } from './take-a-tour/store/reducers';
import { TakeATourEffects } from './take-a-tour/store/effects/take-a-tour.effects';
import { EffectsModule } from '@ngrx/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatDividerModule, MatGridListModule, MatSelectModule, MatMenuModule, MatIconModule } from '@angular/material';
import { TakeATourService } from './takeATour.service';
import { InMemoryDataService } from './in-memory-data.service';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule, HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

@NgModule({
  declarations: [
    AppComponent,
    DialogContentComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([TakeATourEffects]),
    //
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatDividerModule,
    MatGridListModule,
    MatSelectModule,
    MatMenuModule,
    MatIconModule,
    //
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [
    TakeATourService
  ],

  entryComponents: [
    DialogContentComponent
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
