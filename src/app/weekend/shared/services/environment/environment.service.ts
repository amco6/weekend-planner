import { Observable } from 'rxjs/rx';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { EnvironmentVariables } from './environment.model';

@Injectable()
export class EnvironmentService {

    public static readonly configPath = '/assets/config.json';

    private environmentVariables: EnvironmentVariables;

    constructor(private http: HttpClient) { }

    loadEnvironmentVariables(): Observable<EnvironmentVariables> {
        if (this.environmentVariables === undefined) {
            return this.http.get<EnvironmentVariables>(EnvironmentService.configPath).pipe(
                tap(environmentVariables => {
                    this.environmentVariables = <EnvironmentVariables>environmentVariables;
                }));
        }
        return Observable.of(this.environmentVariables);
    }

    /**
     * Exposes the environment variables (synchronously) for use in components.
     *
     * @returns {EnvironmentVariables}
     */
    getEnvironmentVariables(): EnvironmentVariables {
        return this.environmentVariables;
    }
}
