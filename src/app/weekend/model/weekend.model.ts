import { WeekendPlanStatus } from './weekendPlanStatus.enum';
import { UserData } from './user-data.model';

export class Weekend {
    id: string;
    name: string;
    startDate: string;
    endDate: string;
    numberOfUsers: number;
    completeByDate?: string;
    completeByUsers?: boolean;
    users: UserData[];
    status: WeekendPlanStatus;
}
