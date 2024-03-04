import { Module } from '@nestjs/common';
import { GenerosController } from './generos.controller';
import { GenerosService } from './generos.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GenerosEntity } from './generos.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GenerosEntity])],
  controllers: [GenerosController],
  providers: [GenerosService],
  exports: [GenerosService]
})
export class GenerosModule {}
