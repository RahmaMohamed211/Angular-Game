import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllComponent } from './all/all.component';
import { AlphComponent } from './alph/alph.component';
import { AuthGuard } from './auth.guard';
import { BrowserComponent } from './browser/browser.component';
import { GameDetalisComponent } from './game-detalis/game-detalis.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { OpenWorldComponent } from './open-world/open-world.component';
import { PcComponent } from './pc/pc.component';
import { PopularityComponent } from './popularity/popularity.component';
import { RecingComponent } from './recing/recing.component';
import { RegisterComponent } from './register/register.component';
import { ReleaseComponent } from './release/release.component';
import { RelevanceComponent } from './relevance/relevance.component';
import { ShooterComponent } from './shooter/shooter.component';
import { SocialComponent } from './social/social.component';
import { SportsComponent } from './sports/sports.component';
import { ZombieComponent } from './zombie/zombie.component';

const routes: Routes = [
  {path:'',redirectTo:'login', pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'home',canActivate:[AuthGuard],component:HomeComponent},
  {path:'all',canActivate:[AuthGuard],component:AllComponent},
  {path:'gamedetalis/:id',canActivate:[AuthGuard],component:GameDetalisComponent} ,
  {path:'pc',canActivate:[AuthGuard],component:PcComponent} ,
  {path:'browser',canActivate:[AuthGuard],component:BrowserComponent} ,
  {path:'release',canActivate:[AuthGuard],component:ReleaseComponent} ,
  {path:'popularity',canActivate:[AuthGuard],component:PopularityComponent} ,
  {path:'alph',canActivate:[AuthGuard],component:AlphComponent} ,
  {path:'relevance',canActivate:[AuthGuard],component:RelevanceComponent} ,
  {path:'recing',canActivate:[AuthGuard],component:RecingComponent} ,
  {path:'sports',canActivate:[AuthGuard],component:SportsComponent} ,
  {path:'social',canActivate:[AuthGuard],component:SocialComponent} ,
  
  {path:'shooter',canActivate:[AuthGuard],component:ShooterComponent} ,
  {path:'open',canActivate:[AuthGuard],component:OpenWorldComponent} ,
  {path:'zombie',canActivate:[AuthGuard],component:ZombieComponent} ,
  {path :'**',component:NotfoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
