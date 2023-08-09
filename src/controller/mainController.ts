import { Router, Request, Response } from "express";
import { Controller } from "../general/interfaces/Controller";
import { StandardResponse } from "../types/types";

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

	private async helloWorld(_req: Request, res: StandardResponse<string>) {
		try {
			return res.status(200).json({ data: "Hello World!" });
		} catch (error) {
			return res.status(500).json({ error: new Error("Failed") });
		}
	}
}
