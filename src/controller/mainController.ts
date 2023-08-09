import { Router, Request, Response } from "express";
import { Controller } from "../general/interfaces/Controller";
import { StandardRequestQuery, StandardResponse } from "../types/types";
import { STATUS_CODE } from "../general/constants";

export class MainController implements Controller {
	private readonly _path: string = "/api/main";
	public getPath(): string {
		return this._path;
	}

	public getRoutes = () => {
		const routes = Router();
		routes.get("/", this.helloWorld);
		return routes;
	};

	private async helloWorld(
		_req: StandardRequestQuery<{ name: string }>,
		res: StandardResponse<string>
	) {
		try {
			const { name } = _req.query;
			return res
				.status(STATUS_CODE.OK)
				.json({ data: `Hello World! Your name is ${name}` });
		} catch (error) {
			return res
				.status(STATUS_CODE.SERVER_ERROR)
				.json({ error: new Error("Failed") });
		}
	}
}
