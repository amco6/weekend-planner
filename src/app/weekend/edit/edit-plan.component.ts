import { Weekend } from './../shared/model/weekend.model';
import { WeekendDateUtils } from './../shared/services/weekendDateUtils';
import { UserData } from './../shared/model/user-data.model';
import { PlanService } from './../shared/services/plan/plan.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap } from 'rxjs/operators';
import * as moment from 'moment';

/**
 * Edit weekend plan component.
 *
 * @export
 * @class EditWeekendPlanComponent
 * @implements {OnInit}
 */
@Component({
    selector: 'app-edit',
    templateUrl: './edit-plan.component.html',
    styleUrls: ['./../../app.component.scss']
})
export class EditWeekendPlanComponent implements OnInit {

    plan: Weekend;
    planForm: FormGroup;
    users: UserData[];
    startWeekends: moment.Moment[];
    endWeekends: moment.Moment[];
    heading = 'Edit weekend plan';
    // hint = 'Edit the weekend plan...';

    constructor(
        private route: ActivatedRoute,
        private formBuilder: FormBuilder,
        private planService: PlanService
    ) { }

    /**
     * Gets the current weekend plan to edit.
     *
     * @memberof EditWeekendPlanComponent
     */
    ngOnInit() {
        this.startWeekends = WeekendDateUtils.getSaturdays(52);
        this.endWeekends = WeekendDateUtils.getSaturdays(52);

        this.route.params.pipe(
            mergeMap(params => {
                return this.planService.getWeekend(params['id']);
            })
        ).subscribe(plan => {
            this.plan = plan;
            this.planForm = this.formBuilder.group({
                name: [plan.name, Validators.required],
                startDate: [plan.startDate, Validators.required],
                endDate: [plan.endDate, Validators.required]
            });
            this.users = plan.users;
        });
    }

}
