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

    /**
     * Gets the weekend plan path.
     *
     * @returns {string}
     * @memberof PlanService
     */
    getWeekendPlanPath(): string {
        const environmentVariables = this.environmentService.getEnvironmentVariables();
        return `http://localhost:3000/weekend`;
    }

    /**
     * Gets all the weekend plans.
     *
     * @returns {Observable<Weekend[]>}
     * @memberof PlanService
     */
    getAllWeekendPlans(): Observable<Weekend[]> {
        return this.http.get<Weekend[]>(this.getWeekendPlanPath());
    }

    /**
     * Gets a weekend plan.
     *
     * @param {string} id the id of the weekend plan.
     * @returns {Observable<Weekend>}
     * @memberof PlanService
     */
    getWeekend(id: string): Observable<Weekend> {
        return this.http.get<Weekend>(`${this.getWeekendPlanPath()}/${id}`);
    }

    /**
     * Creates a new weekend plan.
     *
     * @param {Weekend} plan the plan to create.
     * @returns {Observable<Weekend>}
     * @memberof PlanService
     */
    createWeekendPlan(plan: Weekend): Observable<Weekend> {
        return this.http.post<Weekend>(this.getWeekendPlanPath(), plan);
    }

    /**
     * Updates a weekend plan.
     *
     * @param {Weekend} plan the updated weekend plan.
     * @returns {Observable<Weekend>}
     * @memberof PlanService
     */
    updateWeekendPlan(plan: Weekend): Observable<Weekend> {
        return this.http.put<Weekend>(`${this.getWeekendPlanPath()}/${plan.id}`, plan);
    }
}
