import { Module } from '@nestjs/common';
import { MarcasController } from './marcas.controller';
import { MarcasService } from './marcas.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MarcasEntity } from './marcas.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MarcasEntity])],
  controllers: [MarcasController],
  providers: [MarcasService],
  exports: [MarcasService]
})
export class MarcasModule {}
