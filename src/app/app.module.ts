import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AllComponent } from './all/all.component';
import { ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { GameDetalisComponent } from './game-detalis/game-detalis.component';
import { SlicewordPipe } from './sliceword.pipe';
import { NotfoundComponent } from './notfound/notfound.component'
import { RouterModule, ROUTES } from '@angular/router';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { CarouselModule } from 'ngx-owl-carousel-o';
import { PcComponent } from './pc/pc.component';
import { BrowserComponent } from './browser/browser.component';
import { ReleaseComponent } from './release/release.component';
import { PopularityComponent } from './popularity/popularity.component';
import { AlphComponent } from './alph/alph.component';
import { RelevanceComponent } from './relevance/relevance.component';
import { RecingComponent } from './recing/recing.component';
import { SportsComponent } from './sports/sports.component';
import { SocialComponent } from './social/social.component';
import { ShooterComponent } from './shooter/shooter.component';
import { OpenWorldComponent } from './open-world/open-world.component';
import { ZombieComponent } from './zombie/zombie.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    AllComponent,
    GameDetalisComponent,
    SlicewordPipe,
    NotfoundComponent,
    PcComponent,
    BrowserComponent,
    ReleaseComponent,
    PopularityComponent,
    AlphComponent,
    RelevanceComponent,
    RecingComponent,
    SportsComponent,
    SocialComponent,
    ShooterComponent,
    OpenWorldComponent,
    ZombieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,HttpClientModule, RouterModule,BrowserAnimationsModule,CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
