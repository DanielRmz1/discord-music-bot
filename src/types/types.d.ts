import { Response, Request, Send } from "express";

export interface StandardResponse<T> extends Response {
	json: Send<
		{
			message?: string;
			error?: Error;
			data?: T;
		},
		this
	>;
}
