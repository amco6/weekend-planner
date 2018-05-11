import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

/**
 * List weekends in weekend date format.
 *
 * @export
 * @class ListWeekends
 * @implements {PipeTransform}
 */
@Pipe({ name: 'listWeekends' })
export class ListWeekends implements PipeTransform {
    constructor() { }
    transform(dates: string[]): string {
        let list = '';
        dates.forEach(date => {
            const weekend = moment(date).isValid() ?
                `${moment(date).format('ddd Do MMM')} - ${moment(date).add(1, 'd').format('ddd Do MMM (YYYY)')}` : date;

            list = list.concat(weekend, '\n');
        });

        return list;
    }
}
