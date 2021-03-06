import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { ApolloModule } from 'apollo-angular';
import { HttpLinkModule } from 'apollo-angular-link-http';

import { IAppState, WordActions } from './store';
import { initialState, reducer } from './store/reducer';

import { StoreModule } from '@ngrx/store';

import {
  // TRANSLATION_PROVIDERS,
  TranslatePipe
  // TranslateService
} from './translate';

import { AppComponent } from './app.component';
import {
  AddWordComponent,
  WordListComponent,
  MultiComponent,
  ErrorMessageComponent,
  FilterBarComponent,
  TopMenuComponent
} from './components';
import { WordService, ValidationService } from './services';
import { LimitLengthDirective } from './directives';

import { OrderByPipe } from './pipes';

@NgModule({
  declarations: [
    AppComponent,
    AddWordComponent,
    WordListComponent,
    MultiComponent,
    ErrorMessageComponent,
    LimitLengthDirective,
    FilterBarComponent,
    OrderByPipe,
    TranslatePipe,
    TopMenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule,
    FormsModule,
    StoreModule.forRoot({ words: reducer }),
    ReactiveFormsModule
  ],
  providers: [
    WordService,
    WordActions,
    ValidationService
    // TRANSLATION_PROVIDERS,
    // TranslateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {}
}
