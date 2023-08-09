import "dotenv/config";

enum EnvValues {
	Port = "PORT",
	Stage = "STAGE",
	DISCORD_TOKEN = "DISCORD_TOKEN",
	APP_ID = "APP_ID",
	PUBLIC_KEY = "PUBLIC_KEY",
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

export const getDiscordToken = (): string =>
	getConfigValue<string>(EnvValues.DISCORD_TOKEN);

export const getAppId = (): string => getConfigValue<string>(EnvValues.APP_ID);

export const getPublicKey = (): string =>
	getConfigValue<string>(EnvValues.PUBLIC_KEY);
