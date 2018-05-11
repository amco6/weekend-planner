import { WeekendDateUtils } from './../shared/services/weekendDateUtils';
import { weekendPlanStatusStrings, WeekendPlanStatus } from './../shared/model/weekendPlanStatus.enum';
import { WeekendDate } from './../shared/pipes/weekend.pipe';
import { Weekend } from './../shared/model/weekend.model';
import { PlanService } from './../shared/services/plan/plan.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';

/**
 * Weekend plan home page component.
 *
 * @export
 * @class WeekendPlansComponent
 * @implements {OnInit}
 */
@Component({
    selector: 'app-weekend-plans',
    templateUrl: './weekend-plans.component.html',
    styleUrls: ['./../../app.component.scss']
})
export class WeekendPlansComponent implements OnInit {

    plans: Weekend[];
    weekendPlanStatusStrings = weekendPlanStatusStrings;

    constructor(
        private planService: PlanService
    ) { }

    /**
     * Gets all of the weekend plans.
     *
     * @memberof WeekendPlansComponent
     */
    ngOnInit() {
        this.planService.getAllWeekendPlans().subscribe(plans => {
            this.plans = plans;
        });
    }

    // TODO
    completePlan(id: string) {
        const plan = this.plans.find(p => p.id === id);
        const freeWeekends = [];
        const possibleFreeWeekends = [];
        let busyWeekends = [];
        let possibleBusyWeekends = [];

        const weekends = WeekendDateUtils.getWeekendsBetweenDates(plan.startDate, plan.endDate, true);

        plan.users.forEach(u => {
            busyWeekends = busyWeekends.concat(u.busyWeekends);
            possibleBusyWeekends = possibleBusyWeekends.concat(u.unsureWeekends);
        });

        weekends.forEach(w => {
            if (!busyWeekends.find(b => moment(b).isSame(moment(w)))) {
                freeWeekends.push(w);
            }
            if (!possibleBusyWeekends.find(b => moment(b).isSame(moment(w)))) {
                possibleFreeWeekends.push(w);
            }
        });
        plan.freeWeekends = freeWeekends;
        plan.possibleFreeWeekends = possibleFreeWeekends;
        plan.status = WeekendPlanStatus.FINISHED;

        this.planService.updateWeekendPlan(plan).subscribe(p => {
            console.log(p);
        });
    }
}
