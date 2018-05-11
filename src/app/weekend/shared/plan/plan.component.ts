import { weekendPlanStatusStrings, WeekendPlanStatus } from './../model/weekendPlanStatus.enum';
import { UserData } from './../model/user-data.model';
import { WeekendDateUtils } from './../services/weekendDateUtils';
import { PlanService } from './../services/plan/plan.service';
import { Weekend } from './../model/weekend.model';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { Router } from '@angular/router';

/**
 * Shared plan component, used to create, view and edit.
 *
 * @export
 * @class PlanComponent
 */
@Component({
    selector: 'app-plan',
    templateUrl: './plan.component.html',
    styleUrls: ['./../../../app.component.scss']
})
export class PlanComponent {

    // optional heading
    @Input() heading: string;

    // optional hint
    @Input() hint: string;

    // Only used if creating a plan
    @Input() planForm: FormGroup;
    @Input() startWeekends: moment.Moment[];
    @Input() endWeekends: moment.Moment[];

    @Input() saveButton: boolean;

    @Input() edit: boolean;

    // Only used if editing/viewing a plan
    @Input() plan: Weekend;
    @Input() users: UserData[];

    userName: string;
    weekends: moment.Moment[];
    showModal = false;

    busyWeekends: Set<string> = new Set();
    unsureWeekends: Set<string> = new Set();

    weekendPlanStatusStrings = weekendPlanStatusStrings;

    constructor(
        private formBuilder: FormBuilder,
        private planService: PlanService,
        private router: Router
    ) { }

    openModal() {
        this.createWeekendList();
        this.showModal = true;
    }

    closeModal() {
        this.showModal = false;
    }

    savePlan() {
        if (this.planForm && this.planForm.invalid) {
            Object.keys(this.planForm.controls).forEach(q => this.planForm.controls[q].markAsTouched());
        } else if (this.edit) {
            Object.keys(this.planForm.controls).forEach(q => {
                this.plan[q] = this.planForm.controls[q].value;
            });
            this.plan.status = WeekendPlanStatus.IN_PROGRESS;
            this.plan.users = this.users;
            this.planService.updateWeekendPlan(this.plan).subscribe(plan => {
                this.router.navigate(['']);
            });
        } else if (this.planForm && this.planForm.valid) {
            const results: Weekend = new Weekend();
            Object.keys(this.planForm.controls).forEach(q => {
                results[q] = this.planForm.controls[q].value;
            });
            this.planService.createWeekendPlan(results).subscribe(plan => {
                this.router.navigate(['']);
            });
        }
    }

    createEndDates() {
        if (this.planForm && this.planForm.controls['startDate'] && this.planForm.controls['startDate'].value) {
            this.endWeekends = WeekendDateUtils.getSaturdays(52, this.planForm.controls['startDate'].value);
        }
    }

    createWeekendList() {
        this.weekends = WeekendDateUtils.getWeekendsBetweenDates(this.planForm.controls['startDate'].value,
            this.planForm.controls['endDate'].value, true);
    }

    addBusyWeekend(weekend: string) {
        if (this.busyWeekends.has(weekend)) {
            this.busyWeekends.delete(weekend);
        } else {
            this.busyWeekends.add(weekend);
        }
    }

    addUnsureWeekend(weekend: string) {
        if (this.unsureWeekends.has(weekend)) {
            this.unsureWeekends.delete(weekend);
        } else {
            this.unsureWeekends.add(weekend);
        }
    }

    addUser() {
        const newUser = new UserData();
        newUser.userName = this.userName;
        newUser.busyWeekends = [];
        newUser.unsureWeekends = [];
        this.busyWeekends.forEach(w => newUser.busyWeekends.push(w));
        this.unsureWeekends.forEach(w => newUser.unsureWeekends.push(w));

        if (this.users) {
            this.users.push(newUser);
        } else {
            this.users = [newUser];
        }

        this.userName = null;

        this.busyWeekends.clear();
        this.unsureWeekends.clear();
        this.closeModal();
    }

    /**
     * Removes the user from the users list.
     *
     * @param {UserData} user the user to remove
     * @memberof PlanComponent
     */
    removeUser(user: UserData) {
        // todo use id
        this.users = this.users.filter(u => u.userName !== user.userName);
    }

    /**
     * Disable busy weekend button when it is already a possibly busy weekend.
     *
     * @param {string} weekend in the table
     * @returns {boolean} should the button be disabled.
     * @memberof PlanComponent
     */
    disableBusyWeekend(weekend: string): boolean {
        return this.unsureWeekends.has(weekend);
    }

    /**
     * Disable possibly busy weekend button when it is already a busy weekend.
     *
     * @param {string} weekend in the table
     * @returns {boolean} should the button be disabled.
     * @memberof PlanComponent
     */
    disableUnsureWeekend(weekend: string): boolean {
        return this.busyWeekends.has(weekend);
    }
}
