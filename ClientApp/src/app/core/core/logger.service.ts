export enum LogLevel {
  Off = 0,
  Error,
  Warning,
  Info,
  Debug,
}

export type LogOutput = (
  source: string,
  level: LogLevel,
  ...objects: any[]
) => void;

export class LoggerService {
  static level = LogLevel.Debug;
  static outputs: LogOutput[] = [];

  static enableProductionMode() {
    LoggerService.level = LogLevel.Warning;
  }

  constructor(private source?: string) {}

  public debug(...objects: any[]): void {
    this.log(console.log, LogLevel.Debug, objects);
  }

  public info(...objects: any[]): void {
    // tslint:disable-next-line:no-console
    this.log(console.info, LogLevel.Info, objects);
  }

  public warn(...objects: any[]): void {
    this.log(console.warn, LogLevel.Warning, objects);
  }

  public error(...objects: any[]): void {
    this.log(console.error, LogLevel.Error, objects);
  }

  private log(func: Function, level: LogLevel, objects: any[]): void {
    if (level <= LoggerService.level) {
      const log = this.source
        ? ['[' + this.source + ']'].concat(objects)
        : objects;
      func.apply(console, log);
      LoggerService.outputs.forEach((output) => {
        output.apply(output, [this.source, level].concat(objects));
      });
    }
  }
}
