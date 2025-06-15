import { Module, Global } from "@nestjs/common";
import { SharedLoggerService } from "./logger.service";

@Global()
@Module({
  providers: [SharedLoggerService],
  exports: [SharedLoggerService],
})
export class SharedLoggerModule {}
