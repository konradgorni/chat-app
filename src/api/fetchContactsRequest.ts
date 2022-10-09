import axios from "axios";

const endpoint = "https://randomuser.me/api";

export const fetchContactsRequest = () =>
	axios.get(
		`${endpoint}/?results=10&inc=name,last,picture,location,phone,dob,login,email`,
	);
