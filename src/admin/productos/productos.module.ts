import { Module } from '@nestjs/common';
import { ProductosController } from './productos.controller';
import { ProductosService } from './productos.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductosEntity } from './productos.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductosEntity])],
  controllers: [ProductosController],
  providers: [ProductosService],
})
export class ProductosModule {}
