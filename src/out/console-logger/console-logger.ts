import { IStreamLogger } from "../../core/handlers/types";

export class ConsoleLogger implements IStreamLogger {
  private static instance: IStreamLogger = new ConsoleLogger();

  public static getInstance(): IStreamLogger {
    if(!ConsoleLogger.instance) {
      ConsoleLogger.instance = new ConsoleLogger();
    }

    return ConsoleLogger.instance;
  }

  log(...args: any[]): void {
    console.log(...args);
  }

  error(...args: any[]): void {
    console.error(...args);
  }

  end(): void {
    console.log('Done!');
  }
}
