import { ListArray } from './shared/pipes/listArray.pipe';
import { ListWeekends } from './shared/pipes/listWeekends.pipe';
import { PlanComponent } from './shared/plan/plan.component';
import { GetLabel } from './shared/pipes/getLabel.pipe';
import { EditWeekendPlanComponent } from './edit/edit-plan.component';
import { WeekendDateUtils } from './shared/services/weekendDateUtils';
import { WeekendDate } from './shared/pipes/weekend.pipe';
import { WeekendPlansComponent } from './plans/weekend-plans.component';
import { PlanService } from './shared/services/plan/plan.service';
import { CreateWeekendPlanComponent } from './create/create-plan.component';
import { ViewWeekendPlanComponent } from './view/view-plan.component';
import { EnvironmentService } from './shared/services/environment/environment.service';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const pipes: any[] = [
    WeekendDate,
    GetLabel,
    ListWeekends,
    ListArray
];

const services: any[] = [
    EnvironmentService,
    PlanService,
    WeekendDateUtils
];

const components: any[] = [
    PlanComponent,
    EditWeekendPlanComponent,
    ViewWeekendPlanComponent,
    CreateWeekendPlanComponent,
    WeekendPlansComponent
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        RouterModule
    ],
    exports: [
        components.concat(pipes)
    ],
    declarations: [
        components.concat(pipes)
    ],
    providers: [
        services.concat(pipes)
    ]
})
export class WeekendModule { }
