import { EnvironmentService } from './weekend/shared/services/environment/environment.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    constructor(private envService: EnvironmentService) { }

    ngOnInit() {
        this.envService.loadEnvironmentVariables().subscribe();
    }

}
