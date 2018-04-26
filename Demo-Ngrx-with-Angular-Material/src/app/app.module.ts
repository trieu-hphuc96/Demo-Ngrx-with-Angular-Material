import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DialogContentComponent } from './take-a-tour/components/dialog/dialog-content/dialog-content.component';
import { DialogComponent } from './take-a-tour/components/dialog/dialog.component';
import { StoreModule } from '@ngrx/store';


import { reducers } from './take-a-tour/store/reducers';
import { TakeATourEffects } from './take-a-tour/store/effects/take-a-tour.effects';
import { EffectsModule } from '@ngrx/effects';


@NgModule({
  declarations: [
    AppComponent,
    DialogContentComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([TakeATourEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
