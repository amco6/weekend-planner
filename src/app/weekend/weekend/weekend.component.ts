import { WeekendDate } from './../pipes/weekend.pipe';
import { Weekend } from './../model/weekend.model';
import { PlanService } from './../services/plan/plan.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-weekend',
    templateUrl: './weekend.component.html',
    styleUrls: ['./../../app.component.css']
})
export class WeekendComponent implements OnInit {

    plans: Weekend[];

    constructor(
        private planService: PlanService
    ) { }

    ngOnInit() {
        this.planService.getAllWeekendPlans().subscribe(plans => {
            this.plans = plans;
        });
    }
}
