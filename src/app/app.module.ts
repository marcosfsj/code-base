// Angular dependencies
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

// Third part dependencies
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// For dev only
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';

// Reouting
import { AppRoutingModule } from './app-routing.module';

// Components
import { HomeComponent,
         HeaderComponent,
         NavbarComponent,
         FooterComponent,
         FoosComponent,
         FooDetailsComponent,
         TemplateDrivenFormComponent,
         ReactiveFormComponent,
         SignupComponent } from './components';

// Pipes
import { ShortenPipe } from './pipes/shorten.pipe';
import { MiscellaneousComponent } from './components/miscellaneous/miscellaneous.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    FoosComponent,
    FooDetailsComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    HeaderComponent,
    SignupComponent,
    ShortenPipe,
    MiscellaneousComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
