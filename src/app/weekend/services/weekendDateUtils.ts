import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as moment from 'moment';

@Injectable()
export class WeekendDateUtils {

    constructor() { }

    /**
     * Returns a moment of the next saturday date.
     *
     * @returns {moment.Moment}
     * @memberof WeekendDateUtils
     */
    public static getFirstSaturday(): moment.Moment {
        let saturday = moment().day('saturday').hour(0).minute(0).second(0);
        if (saturday.isBefore(moment().hour(23).minute(59).second(59))) {
            saturday = moment(saturday.add(1, 'weeks'));
        }
        return saturday;
    }

    // TODO
    public static getSaturdays(amount: number, startDate?: string): moment.Moment[] {
        const saturday = startDate ? moment(startDate) : this.getFirstSaturday();
        const saturdays = [saturday];

        for (let i = 0; i < amount; i++) {
            const nextSat = moment(saturday).add(1, 'weeks');
            saturdays.push(moment(nextSat));
        }
        saturdays.forEach(s => console.log(moment(s).format('DD-MM-YYYY')));
        return saturdays;
    }


}
