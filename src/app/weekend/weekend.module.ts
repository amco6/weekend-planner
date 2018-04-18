import { WeekendDateUtils } from './services/weekendDateUtils';
import { WeekendDate } from './pipes/weekend.pipe';
import { WeekendComponent } from './weekend/weekend.component';
import { PlanService } from './services/plan/plan.service';
import { CreateWeekendPlanComponent } from './create/create-plan.component';
import { ViewWeekendPlanComponent } from './view/view-plan.component';
import { EnvironmentService } from './services/environment/environment.service';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        RouterModule
    ],
    exports: [
        ViewWeekendPlanComponent, CreateWeekendPlanComponent, WeekendComponent, WeekendDate
    ],
    declarations: [
        ViewWeekendPlanComponent, CreateWeekendPlanComponent, WeekendComponent, WeekendDate
    ],
    providers: [
        EnvironmentService, PlanService, WeekendDate, WeekendDateUtils
    ]
})
export class WeekendModule { }
