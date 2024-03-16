/**
 * Represents an event in TypeScript where a member has joined a friends chat.
 */
declare class FriendsChatMemberJoined {
	private readonly member: FriendsChatMember;

	constructor(member: FriendsChatMember);
}
