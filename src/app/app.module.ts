import { WeekendModule } from './weekend/weekend.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        WeekendModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
