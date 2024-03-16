/**
 * Represents an event in TypeScript where a member has left a friends chat.
 */
declare class FriendsChatMemberLeft {
	private readonly member: FriendsChatMember;

	constructor(member: FriendsChatMember);
}
