import { createContext, Dispatch, SetStateAction } from "react";
import { IContact } from "./utils/prepareContactsHandler";

export interface IChatContext {
	contacts: IContact[];
	setContacts: Dispatch<SetStateAction<IContact[]>>;
	selectedContact: string | null;
	setSelectedContact: Dispatch<SetStateAction<string | null>>;
}

export const ChatContext = createContext<IChatContext>({} as IChatContext);
