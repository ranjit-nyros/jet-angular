import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DatePickerModule } from "plugins/datepicker/index";
import { OverlayModule } from "angular-io-overlay";
import { SimpleDropdownModule } from 'plugins/ng2-simple-dropdown/ng2-simple-dropdown.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NguiAutoCompleteModule } from '@ngui/auto-complete';
import {DpDatePickerModule} from 'ng2-date-picker';
import { Carousel } from './carousel.component';
import { Slide } from './slide.component';
import { HeaderComponent } from './header/header.component';
import { ModalComponent } from 'plugins/modal/_directives/index';
import { ModalService } from 'plugins/modal/services/index';
import { SliderComponent } from './slider/slider.component';
import { Angular2TokenService } from 'angular2-token';
import {AuthService} from "./services/auth.service";
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { FormWizardModule } from 'angular2-wizard';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { CustomFormsModule } from 'ng2-validation';
import { EqualValidator } from 'plugins/equal-validator.directive';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Carousel,
    Slide,
    EqualValidator,
    ModalComponent,
    HeaderComponent,
    SliderComponent,
    RegisterComponent,
    FooterComponent,
    ThankyouComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CustomFormsModule,
    ReactiveFormsModule,
    HttpModule,
    OverlayModule,
    DatePickerModule,
    SimpleDropdownModule,
    NguiAutoCompleteModule,
    DpDatePickerModule,
    AppRoutingModule,
    FormWizardModule

  ],
  providers: [ModalService,Angular2TokenService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
