import { CreateWeekendPlanComponent } from './weekend/create/create-plan.component';
import { WeekendComponent } from './weekend/weekend/weekend.component';
import { ViewWeekendPlanComponent } from './weekend/view/view-plan.component';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: WeekendComponent
    },
    {
        path: 'view/:id',
        component: ViewWeekendPlanComponent
    },
    {
        path: 'create',
        component: CreateWeekendPlanComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        preloadingStrategy: PreloadAllModules,
        useHash: true
    })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
