import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ServicesComponent } from './components/services/services.component';
import { TeamComponent } from './components/team/team.component';

const routes: Routes = [
  { path: 'components/about', component: AboutComponent },
  { path: 'components/contact', component: ContactComponent },
  { path: 'components/portfolio', component: PortfolioComponent },
  { path: 'components/services', component: ServicesComponent },
  { path: 'components/team', component: TeamComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
