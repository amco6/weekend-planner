import { Weekend } from './../shared/model/weekend.model';
import { WeekendDateUtils } from './../shared/services/weekendDateUtils';
import { UserData } from './../shared/model/user-data.model';
import { PlanService } from './../shared/services/plan/plan.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { Router } from '@angular/router';

/**
 * Create weekend plan component.
 *
 * @export
 * @class CreateWeekendPlanComponent
 * @implements {OnInit}
 */
@Component({
    selector: 'app-create',
    templateUrl: './create-plan.component.html',
    styleUrls: ['./../../app.component.scss']
})
export class CreateWeekendPlanComponent implements OnInit {

    planForm: FormGroup;
    startWeekends: moment.Moment[];
    endWeekends: moment.Moment[];
    heading = 'Create a new weekend plan';
    hint = 'Please put in the start weekend and end weekend...';

    constructor(
        private formBuilder: FormBuilder,
        private planService: PlanService,
        private router: Router
    ) { }

    /**
     * Create the plan form and get the weekend dates.
     *
     * @memberof CreateWeekendPlanComponent
     */
    ngOnInit() {
        this.startWeekends = WeekendDateUtils.getSaturdays(52);
        this.endWeekends = WeekendDateUtils.getSaturdays(52);
        this.planForm = this.formBuilder.group({
            name: ['', Validators.required],
            startDate: ['', Validators.required],
            endDate: ['', Validators.required]
        });
    }
}
