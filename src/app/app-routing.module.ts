import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from './shared/shared.module';

import { AboutComponent } from './about/about.component';

const routes: Routes = [
    {
        path: 'about',
        component: AboutComponent
    }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: [AboutComponent]
})

export class AppRoutingModule { }
