import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

/**
 * Returns moment date as a weekend date string.
 *
 * @export
 * @class WeekendDate
 * @implements {PipeTransform}
 */
@Pipe({ name: 'weekendDate' })
export class WeekendDate implements PipeTransform {
    constructor() { }
    transform(date: string): string {
        // TODO: decide on format
        // return moment(date).isValid() ?
        //     `${moment(date).format('DD/MM/YYYY')}-${moment(date).add(1, 'd').format('DD/MM/YYYY')}` : date;
        return moment(date).isValid() ?
            `${moment(date).format('ddd Do MMM')} - ${moment(date).add(1, 'd').format('ddd Do MMM (YYYY)')}` : date;
    }
}
