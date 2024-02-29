import { Module } from '@nestjs/common';
import { TallasController } from './tallas.controller';
import { TallasService } from './tallas.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TallasEntity } from './tallas.entity';


@Module({
  imports: [TypeOrmModule.forFeature([TallasEntity])],
  controllers: [TallasController],
  providers: [TallasService],
  exports:[TallasService]
})
export class TallasModule {}
