import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { SubscribeComponent } from './components/layouts/subscribe/subscribe.component';
import { BlogComponent } from './components/layouts/blog/blog.component';
import { PodcastComponent } from './components/layouts/podcast/podcast.component';
import { VideoComponent } from './components/layouts/video/video.component';
import { PartnersComponent } from './components/layouts/partners/partners.component';
import { AudienceComponent } from './components/layouts/audience/audience.component';
import { SocialStatisticsComponent } from './components/layouts/social-statistics/social-statistics.component';
import { AboutComponent } from './components/layouts/about/about.component';
import { FollowersComponent } from './components/layouts/followers/followers.component';
import { MainBannerComponent } from './components/layouts/main-banner/main-banner.component';
import { NavbarComponent } from './components/layouts/navbar/navbar.component';
import { BlogDetailsComponent } from './components/pages/blog-details/blog-details.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    SubscribeComponent,
    BlogComponent,
    PodcastComponent,
    VideoComponent,
    PartnersComponent,
    AudienceComponent,
    SocialStatisticsComponent,
    AboutComponent,
    FollowersComponent,
    MainBannerComponent,
    NavbarComponent,
    BlogDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
