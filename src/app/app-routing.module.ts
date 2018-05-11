import { CreateWeekendPlanComponent } from './weekend/create/create-plan.component';
import { EditWeekendPlanComponent } from './weekend/edit/edit-plan.component';
import { WeekendPlansComponent } from './weekend/plans/weekend-plans.component';
import { ViewWeekendPlanComponent } from './weekend/view/view-plan.component';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: WeekendPlansComponent
    },
    {
        path: 'view/:id',
        component: ViewWeekendPlanComponent
    },
    {
        path: 'edit/:id',
        component: EditWeekendPlanComponent
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
