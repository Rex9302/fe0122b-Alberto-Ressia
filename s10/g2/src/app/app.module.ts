import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ActivePostsComponent } from './components/active-posts/active-posts.component';
import { InactivePostsComponent } from './components/inactive-posts/inactive-posts.component';
import { CardComponent } from './components/card/card.component';
import { GialloTxtDarkDirective } from './giallo-txt-dark.directive';
import { UsersPageComponent } from './components/users-page/users-page.component';
import { DetailsPageComponent } from './components/details-page/details-page.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';

const routes = [
  { path: '', component: HomeComponent },
  { path: 'active-posts', component: ActivePostsComponent },
  { path: 'inactive-posts', component: InactivePostsComponent },
  { path: 'details/:id', component: DetailsPageComponent },

  {
    path: 'users',
    component: UsersPageComponent,
    children: [
      {
        path: ':id',
        component: UserDetailComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ActivePostsComponent,
    InactivePostsComponent,
    CardComponent,
    GialloTxtDarkDirective,
    UsersPageComponent,
    DetailsPageComponent,
    UserDetailComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
