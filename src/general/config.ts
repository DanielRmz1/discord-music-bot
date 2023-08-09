import "dotenv/config";

enum EnvValues {
	Port = "PORT",
	Stage = "STAGE",
}

const getConfigValue = <T>(key: string) => {
	const value = process.env[key] as T;
	if (!value) {
		throw new Error(`${key} not found in environment variables`);
	}
	return value;
};

export const getPort = (): number => getConfigValue<number>(EnvValues.Port);

export const getEnvironment = (): string =>
	getConfigValue<string>(EnvValues.Stage);
