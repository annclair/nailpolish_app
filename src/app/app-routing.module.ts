import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NailpolishDetailComponent } from './nailpolish-detail/nailpolish-detail.component';
import { NailpolishComponent } from './nailpolish/nailpolish.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes : Routes = [
    {
        path: '',
        redirectTo: '/nailpolish',
        pathMatch: 'full'
    },
    {
        path: 'nailpolish',
        component: NailpolishComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'detail/:id',
        component: NailpolishDetailComponent
    }
]

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
