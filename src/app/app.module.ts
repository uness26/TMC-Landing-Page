import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ConnectWalletComponent } from '../app/pop_ups/join/connect-wallet/connect-wallet.component';
import { NotfoundErrorComponent } from './general-pages/notfound-error/notfound-error.component';
import { LocationErrorComponent } from './general-pages/location-error/location-error.component';
import { NavComponent } from './shared/nav-bar/nav-bar.component';
import { CommonModule } from '@angular/common';
import { BuyTokenComponent } from './pop_ups/buy-token/buy-token.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { DistributionComponent } from './distribution/distribution.component';
import { AirdropComponent } from './airdrop/airdrop.component';
import { TwitterPopupComponent } from './pop_ups/join/twitter-popup/twitter-popup.component';
import { DiscordPopupComponent } from './pop_ups/join/discord-popup/discord-popup.component';
import { TelegramPopupComponent } from './pop_ups/join/telegram-popup/telegram-popup.component';
import { GithubPopupComponent } from './pop_ups/join/github-popup/github-popup.component';
import { SucessPopupComponent } from './pop_ups/join/sucess-popup/sucess-popup.component';
import { EcosystemComponent } from './ecosystem/ecosystem.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { HttpClientModule } from '@angular/common/http'
import { Web3Provider } from '@ethersproject/providers';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ConnectWalletComponent,
    LocationErrorComponent,
    NotfoundErrorComponent,
    NavComponent,
    BuyTokenComponent,
    AboutComponent,
    DistributionComponent,
    AirdropComponent,
    TwitterPopupComponent,
    DiscordPopupComponent,
    TelegramPopupComponent,
    GithubPopupComponent,
    SucessPopupComponent,
    EcosystemComponent,
    FaqComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: 'Web3Provider',
      useValue: Web3Provider
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
