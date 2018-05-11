import { EnumValue } from './enum-value.model';

/**
 * Weekend plan statuses enum.
 *
 * @export
 * @enum {number}
 */
export enum WeekendPlanStatus {
    NEW = <any>'NEW',
    IN_PROGRESS = <any>'IN_PROGRESS',
    FINISHED = <any>'FINISHED',
    DELETED = <any>'DELETED'
}

export const weekendPlanStatusStrings: EnumValue[] = [
    { label: 'New plan', value: WeekendPlanStatus.NEW },
    { label: 'Plan in progress', value: WeekendPlanStatus.IN_PROGRESS },
    { label: 'Plan is finished', value: WeekendPlanStatus.FINISHED },
    { label: 'Deleted', value: WeekendPlanStatus.DELETED }
];
