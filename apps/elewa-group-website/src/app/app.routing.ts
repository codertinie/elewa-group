
import { NgModule } from '@angular/core';
import { RouterModule, Route }  from '@angular/router';

export const ELEWA_GROUP_ROUTES: Route[] = [

  // { path: '*', redirectTo: 'home', pathMatch: 'full' },
  { path: '', redirectTo: 'home/en', pathMatch: 'full' },

  { path: 'home', redirectTo: 'home/en' },
  { path: 'home/en', loadChildren: () => import('libs/pages/elewa/home/src/lib/features-elewa-home.module').then(m => m.HomePageModule) },

  // about us page route
  { path: 'about', redirectTo: 'about/en' },
  { path: 'about/en', loadChildren: () => import('libs/pages/elewa/about-us/src/lib/elewa-about-us.module').then(m => m.AboutUsModule) },

  // activities page route
  { path: 'activities', redirectTo: 'activities/en' },
  { path: 'activities/en', loadChildren: () => import('libs/pages/elewa/activities/src/lib/elewa-activities.module').then(m => m.ActivitiesModule) },

  // social-impact page route
  { path: 'social-impact', redirectTo: 'social-impact/en' },
  { path: 'social-impact/en', loadChildren: () => import('libs/pages/elewa/social-impact/src/lib/elewa-social-impact.module').then(m => m.SocialImpactModule) },

  // invest page route
  {  path: 'invest', redirectTo: 'invest/en'  },
  {  path: 'invest/en', loadChildren: () => import('libs/pages/elewa/invest/src/lib/features-elewa-invest.module').then(m => m.InvestPageModule)},

  // news page route
  {  path: 'news', redirectTo: 'news/en'  },
  {  path: 'news/en', loadChildren: () => import('libs/pages/elewa/news/src/lib/features-elewa-news.module').then(m => m.NewsPageModule)},

  // contact page route
  {  path: 'contact', redirectTo: 'contact/en'  },
  {  path: 'contact/en', loadChildren: () => import('libs/pages/elewa/contact/src/lib/features-elewa-contact.module').then(m => m.ContactPageModule)},
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      ELEWA_GROUP_ROUTES,
      {
        scrollPositionRestoration: 'enabled',
        enableTracing: true,
        onSameUrlNavigation: 'reload'
      },
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }


@NgModule({
  imports: [
    RouterModule.forRoot(
      ELEWA_GROUP_WEBSITE_ROUTES,
      {
        scrollPositionRestoration: 'enabled',
        enableTracing: true, 
        onSameUrlNavigation: 'reload'
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { } 