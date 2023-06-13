import { ConfigKeys } from "./ConfigKeys";
import Logger, { LogLevel } from "cinerama-common/lib/misc/Logger";

const writeLine = Logger.generateLogger("ConfigManager");

class ConfigManager {

  private static getKeyString(key: ConfigKeys): string {
    return ConfigKeys[key];
  }

  public getInt(key: ConfigKeys, failsafe?: number): number {
    const value = process.env[ConfigManager.getKeyString(key)];
    if (value != null) {
      return parseInt(value);
    }
    writeLine("Used failsafe value " + failsafe + " for " + key, LogLevel.Warning);
    return failsafe || 0;
  }

  public getString(key: ConfigKeys, failsafe?: string): string {
    const value = process.env[ConfigManager.getKeyString(key)];
    if (value != null) {
      return value;
    }
    writeLine("Used failsafe value " + failsafe + " for " + key, LogLevel.Warning);
    return failsafe || "";
  }
}

const instance = new ConfigManager();
export default instance;