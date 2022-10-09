// type IMessageType = 1 | 2;
export enum IMessageType {
	TYP1 = "1",
	TYP2 = "2",
}

export interface IMessage {
	time: Date;
	message: string;
	type: IMessageType;
}
export interface IContact {
	id: string;
	name: string;
	last: string;
	phone: string;
	avatar: string;
	largeAvatar: string;
	country: string;
	city: string;
	age: number;
	messages: IMessage[];
	favourite: boolean;
	email: string;
}

interface IFetchedUsers {
	dob: { date: string; age: number };
	location: { city: string; country: string; postcode: string; state: string };
	name: { title: string; first: string; last: string };
	phone: string;
	picture: { large: string; medium: string; thumbnail: string };
	login: { uuid: string };
	email: string;
}

const randomSentences = [
	"Hi there, how are you?",
	"Hey, what's up?",
	"Hello, how are you doing? Today i have had first day in new work",
	"Hi , whats'up",
	"Hi there, how are you?",
	"Hey, what's up?",
	"Hello, how are you doing?",
	"Hi , whats'up",
	"Hello, how are you doing?",
	"Hi , whats'up",
];
function randomDate(start: Date, end: Date) {
	return new Date(
		start.getTime() + Math.random() * (end.getTime() - start.getTime()),
	);
}

const currentDayMinus3Days = new Date();
currentDayMinus3Days.setDate(currentDayMinus3Days.getDate() - 3);

export const prepareContactsHandler = (
	fetchedUsers: IFetchedUsers[],
): IContact[] =>
	fetchedUsers.map((c: IFetchedUsers, index) => ({
		id: c.login.uuid,
		name: c.name.first,
		last: c.name.last,
		phone: c.phone,
		avatar: c.picture.medium,
		largeAvatar: c.picture.large,
		country: c.location.country,
		city: c.location.city,
		age: c.dob.age,
		messages: [
			{
				time: randomDate(currentDayMinus3Days, new Date()),
				message: randomSentences[index],
				type: IMessageType.TYP1,
			},
		],
		favourite: false,
		email: c.email,
	}));
