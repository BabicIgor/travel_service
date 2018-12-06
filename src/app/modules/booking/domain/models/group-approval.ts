import {Image} from './image';
import {Activity} from './activity';
import {UserApprove} from './user-approve';

export class GroupApproval {
    activity: Activity = null;
    activityApprove: string = null;
    users: Array<UserApprove> = [];
}