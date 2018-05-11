import { EnumValue } from './../model/enum-value.model';
import { Pipe, PipeTransform } from '@angular/core';


/*
 * Takes an enum value and returns it's label
 * Usage:
 *   enumValue | getLabel:EnumValueArray
 * Example:
 *   {{'NEW' | getLabel:[Strings]}}
 *   formats to: New user
*/
@Pipe({ name: 'getLabel' })
export class GetLabel implements PipeTransform {
    constructor() { }
    transform(enumObjVal, dataObjects: EnumValue[]): string {
        if (enumObjVal && dataObjects) {
            const possibleLabel = dataObjects.filter(obj => {
                return enumObjVal.toString() === obj.value;
            })[0];
            return possibleLabel && possibleLabel.label || enumObjVal;
        }
    }
}
