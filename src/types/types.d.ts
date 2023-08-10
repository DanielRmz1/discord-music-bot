import { Response, Request, Send } from "express";
import { InteractionResponseType } from "discord-interactions";

export interface CommandResponse {
	type: InteractionResponseType;
	data: {
		content?: string;
	};
}

export interface StandardResponse extends Response {
	json: (data: CommandResponse) => Response;
}

export interface StandardRequest<T, U> extends Request {
	body: T;
	query: U;
}

export interface StandardRequestQuery<T> extends Request {
	query: T;
}

export interface StandardRequestBody<T> extends Request {
	body: T;
}
