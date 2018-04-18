import { Weekend } from './../../model/weekend.model';
import { EnvironmentService } from './../environment/environment.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PlanService {

    constructor(
        private http: HttpClient,
        private environmentService: EnvironmentService
    ) { }

    getWeekendPlanPath(): string {
        const environmentVariables = this.environmentService.getEnvironmentVariables();
        return `http://localhost:3000/weekend`;
    }

    getAllWeekendPlans(): Observable<Weekend[]> {
        return this.http.get<Weekend[]>(this.getWeekendPlanPath());
    }

    getWeekend(id: string): Observable<Weekend> {
        return this.http.get<Weekend>(`${this.getWeekendPlanPath()}/${id}`);
    }

    createWeekendPlan(plan: Weekend): Observable<Weekend> {
        return this.http.post<Weekend>(this.getWeekendPlanPath(), plan);
    }
}
