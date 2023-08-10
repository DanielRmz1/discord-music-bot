import { Request } from "express";
import { InteractionType } from "discord-interactions";

export interface CommandRequest {
	type?: InteractionType;
	name: string;
}
