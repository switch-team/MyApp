import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Material2Module } from './material2.module';
import { DirectivesModule } from './directives/directives.module';

import {HttpClientModule , HttpClient} from '@angular/common/http';

import {TranslateModule , TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { HeadingComponent } from './heading/heading.component';
import { PricingComponent } from './pricing/pricing.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { MbscModule } from '@mobiscroll/angular-lite';


export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http)
}


@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    AboutComponent,
    HeadingComponent,
    PricingComponent,
    BlogComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    MbscModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    Material2Module,
    FlexLayoutModule,
    DirectivesModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader:{
        provide:TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps :[HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
