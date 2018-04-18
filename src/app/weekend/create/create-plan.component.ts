import { WeekendDateUtils } from './../services/weekendDateUtils';
import { UserData } from './../model/user-data.model';
import { PlanService } from './../services/plan/plan.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';

@Component({
    selector: 'app-create',
    templateUrl: './create-plan.component.html',
    styleUrls: ['./../../app.component.css']
})
export class CreateWeekendPlanComponent implements OnInit {

    planForm: FormGroup;
    users: number[] = [];
    startWeekends: moment.Moment[];
    endWeekends: moment.Moment[];

    constructor(
        private formBuilder: FormBuilder,
        private planService: PlanService
    ) { }

    ngOnInit() {
        this.planForm = this.formBuilder.group({
            name: ['', Validators.required],
            startDate: ['', Validators.required],
            endDate: ['', Validators.required],
            numberOfUsers: ['', Validators.required],
            completeByDate: new FormControl(),
            completeByUsers: new FormControl(),
            user0: new FormControl('User 1')
        });
        this.users.push(0);
        this.startWeekends = WeekendDateUtils.getSaturdays(51);
        this.endWeekends = WeekendDateUtils.getSaturdays(51);
    }

    addUser() {
        const userId = Math.max.apply(null, this.users) + 1;
        this.users.push(userId);
        this.planForm.addControl(`user${userId}`, new FormControl(`User ${userId + 1}`));
    }

    removeUser(id) {
        this.users = this.users.filter(u => u !== id);
        this.planForm.removeControl(`user${id}`);
    }

    createEndDates() {
        if (this.planForm && this.planForm.controls['startDate'] && this.planForm.controls['startDate'].value) {
            this.endWeekends = WeekendDateUtils.getSaturdays(51, this.planForm.controls['startDate'].value);
        }
    }
}
