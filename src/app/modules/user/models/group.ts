import {GroupMember} from './group-member';
import {Package} from './package';

export class Group {
  groupSize: number;
  leader: GroupMember;
  group_leader : Number;
  members: Array<GroupMember>;
  package: Package;
  travelStartDate: Date;
  travelEndDate: Date;

  constructor() {
    this.leader = null;
    this.members = [];
  }
}
