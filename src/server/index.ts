import express, { Express } from "express";
import cors from "cors";
import { getPort } from "../general/config";
import { Controller } from "../general/interfaces/Controller";
import { MainController } from "../controller/mainController";

export default class Server {
	private readonly _app: Express;
	private readonly _port: Number;

	getApp(): Express {
		return this._app;
	}

	constructor() {
		this._app = express();
		this._app.use(cors());
		this._app.use(express.json());

		this.registerRoutes();

		this._port = getPort();
		this._app.set("port", this._port);
	}

	private registerRoutes = () => {
		const controllers: Controller[] = [new MainController()];

		controllers.forEach((controller) =>
			this._app.use(controller.getPath(), controller.getRoutes())
		);
	};

	public start() {
		try {
			this._app.listen(this._port, () =>
				console.info(`Server listening on port -> ${this._port}`)
			);
		} catch (error) {
			console.error("Error trying to start server", error);
		}
	}
}
