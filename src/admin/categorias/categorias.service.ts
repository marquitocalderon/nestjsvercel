import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoriasEntity } from './categorias.entity';
import { Repository } from 'typeorm';
import { CrearCategoriaDto } from './dto/categorias.dto';

@Injectable()
export class CategoriasService {

    constructor(@InjectRepository(CategoriasEntity) private categoriaRepository: Repository<CategoriasEntity>) { }




    obtenerTodoslosCategorias() {
        return this.categoriaRepository.find({
            order: {
                id_categoria: 'DESC',
            },
            where: {
                estado_categoria: true
            }
        })
    }

    async obtenerPorID(id: number) {
        const categoriaEncontrada = await this.categoriaRepository.findOneBy({
          id_categoria: id,
          estado_categoria: true
        });
    
        if (!categoriaEncontrada) {
          throw new HttpException('Categoria no encontrado', HttpStatus.NOT_FOUND);
        }
    
        if (!categoriaEncontrada.estado_categoria) {
          throw new HttpException('Categoria Eliminado', HttpStatus.NOT_FOUND);
        }
    
        return categoriaEncontrada;
     } 
    


    async crearCategorias(datosFronted: CrearCategoriaDto) {
        const categoriaEncontrada = await this.categoriaRepository.findOneBy({
            categoria: datosFronted.categoria,
        })

        if (categoriaEncontrada) {
            throw new HttpException('categoria ya existe en la base de datos', HttpStatus.CONFLICT)
        }

        const nuevaCategoria = await this.categoriaRepository.create(datosFronted)
        await this.categoriaRepository.save(nuevaCategoria)
        return { categoria: "Se guardo Correctamente" }
    }

}
