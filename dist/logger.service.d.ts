import { LoggerService } from "@nestjs/common";
export declare class SharedLoggerService implements LoggerService {
    log(message: string): void;
    error(message: string, trace?: string): void;
    warn(message: string): void;
}
