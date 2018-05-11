import { Pipe, PipeTransform } from '@angular/core';

/**
 * List all of a specific object in an array on new lines.
 * Usage:
 *   object[] | listArray: field, newLine
 * Example:
 *   {{[{name: a}, {name: b}, {name: c}] | getLabel:['name']}}
 *   formats to: 'a\nb\nc'
 *
 * @export
 * @class ListArray
 * @implements {PipeTransform}
 */
@Pipe({ name: 'listArray' })
export class ListArray implements PipeTransform {
    constructor() { }
    transform(data: any[], field: string): string {
        if (data && data.length > 0) {
            let list = '';
            data.forEach(s => {
                list = list.concat(s[field], '\n');
            });

            return list;
        } else {
            return '-';
        }
    }
}
