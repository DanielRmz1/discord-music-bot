import { Router } from "express";
import { Controller } from "../general/interfaces/Controller";
import { StandardRequestBody, StandardResponse } from "../types/types";
import { COMMANDS, STATUS_CODE } from "../general/constants";
import {
	verifyKeyMiddleware,
	InteractionResponseType,
} from "discord-interactions";
import { getPublicKey } from "../general/config";
import { CommandRequest } from "../general/interfaces/Requests";

export class MainController implements Controller {
	private readonly _path: string = "/api/main";
	public getPath(): string {
		return this._path;
	}

	public getRoutes = () => {
		const routes = Router();
		const publicKey = getPublicKey();
		routes.post(
			"/interactions",
			verifyKeyMiddleware(publicKey),
			this.interactions
		);
		return routes;
	};

	private async interactions(
		_req: StandardRequestBody<CommandRequest>,
		res: StandardResponse
	) {
		try {
			const name = _req.body.name;
			if (name === COMMANDS.PING) {
				return res.status(STATUS_CODE.OK).json({
					type: InteractionResponseType.PONG,
					data: {
						content: "Response from AWS server to discord BOT!!",
					},
				});
			}
		} catch (error) {
			return res.status(STATUS_CODE.SERVER_ERROR);
		}
	}
}
