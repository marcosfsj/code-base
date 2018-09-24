import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

// In Memory Module is only for tests
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';

import { HomeComponent,
         HeaderComponent,
         NavbarComponent,
         FooterComponent,
         FoosComponent,
         FooDetailsComponent,
         BarsComponent,
         BarDetailsComponent,
         TemplateDrivenFormComponent,
         ReactiveFormComponent,
         DynamicFormComponent } from './components';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    FoosComponent,
    FooDetailsComponent,
    BarsComponent,
    BarDetailsComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    DynamicFormComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
