import { WeekendPlanStatus } from './weekendPlanStatus.enum';
import { UserData } from './user-data.model';

/**
 * Weekend plan model.
 *
 * @export
 * @class Weekend
 */
export class Weekend {
    id?: string;
    name: string;
    startDate: string;
    endDate: string;
    numberOfUsers?: number;
    completeByDate?: string;
    completeByUsers?: boolean;
    users?: UserData[];
    status?: WeekendPlanStatus;
    freeWeekends?: string[];
    possibleFreeWeekends?: string[];
}
