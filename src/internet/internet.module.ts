import { Module } from '@nestjs/common';
import { InternetController } from './internet.controller';

@Module({
  controllers: [InternetController]
})
export class InternetModule {}
