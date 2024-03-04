import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GenerosEntity } from './generos.entity';
import { Repository } from 'typeorm';
import { CrearGeneroDto } from './dto/generos.dto';

@Injectable()
export class GenerosService {

    constructor(@InjectRepository(GenerosEntity) private generoRepository: Repository<GenerosEntity>) { }


    obtenerTodos() {
        return this.generoRepository.find({
            order: {
                id_genero: 'DESC',
            },
            where: {
                estado_genero: true
            }
        })
    }

    async obtenerPorID(id: number) {
        const encontrado = await this.generoRepository.findOneBy({
          id_genero: id,
          estado_genero: true
        });
    
        if (!encontrado) {
          throw new HttpException('Genero no encontrado', HttpStatus.NOT_FOUND);
        }
    
        if (!encontrado.estado_genero) {
          throw new HttpException('Genero Eliminado', HttpStatus.NOT_FOUND);
        }
    
        return encontrado;
     } 
    



    async crearGenero(datosFronted: CrearGeneroDto) {
        const categoriaEncontrada = await this.generoRepository.findOneBy({
            genero: datosFronted.genero,
        })

        if (categoriaEncontrada) {
            throw new HttpException('Genero ya existe en la base de datos', HttpStatus.CONFLICT)
        }

        const nuevoGenero = await this.generoRepository.create(datosFronted)
        await this.generoRepository.save(nuevoGenero)
        return { genero: "Se guardo Correctamente" }
    }

}
