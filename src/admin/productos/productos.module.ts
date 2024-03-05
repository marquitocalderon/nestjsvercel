import { Module } from '@nestjs/common';
import { ProductosController } from './productos.controller';
import { ProductosService } from './productos.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductosEntity } from './productos.entity';
import { CloudinaryModule } from '../cloudinary/cloudinary.module';
import { UsuariosEntity } from '../usuarios/usuarios.entity';
import { CategoriasEntity } from '../categorias/categorias.entity';
import { TallasEntity } from '../tallas/tallas.entity';
import { MarcasEntity } from '../marcas/marcas.entity';
import { GenerosEntity } from '../generos/generos.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductosEntity, UsuariosEntity, CategoriasEntity, TallasEntity,MarcasEntity,GenerosEntity]), CloudinaryModule],
  controllers: [ProductosController],
  providers: [ProductosService],
})
export class ProductosModule {}
