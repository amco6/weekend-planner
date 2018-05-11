import { mergeMap } from 'rxjs/operators';
import { PlanService } from './../shared/services/plan/plan.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Weekend } from './../shared/model/weekend.model';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-view',
    templateUrl: './view-plan.component.html',
    styleUrls: ['./../../app.component.scss']
})
export class ViewWeekendPlanComponent implements OnInit {

    plan: Weekend;

    constructor(
        private route: ActivatedRoute,
        private formBuilder: FormBuilder,
        private planService: PlanService
    ) { }

    ngOnInit() {
        this.route.params.pipe(
            mergeMap(params => {
                return this.planService.getWeekend(params['id']);
            })
        ).subscribe(plan => {
            this.plan = plan;
        });
    }
}
