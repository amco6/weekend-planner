import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({ name: 'weekendDate' })
export class WeekendDate implements PipeTransform {
    constructor() { }
    transform(date: string): string {
        return moment(date).isValid() ?
            `${moment(date).format('DD/MM/YYYY')}-${moment(date).add(1, 'd').format('DD/MM/YYYY')}` : date;
    }
}
