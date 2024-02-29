import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TallasEntity } from './tallas.entity';
import { CrearTallasDto } from './dto/tallas.dto';

@Injectable()
export class TallasService {

    constructor(@InjectRepository(TallasEntity) private tallasRepository: Repository<TallasEntity>) { }


    obtenerTodaslasTallas() {
        return this.tallasRepository.find({
            order: {
                id_talla: 'DESC',
            },
            where: {
                estado_talla: true
            }
        })
    }

    async obtenerPorID(id: number) {
        const tallaEncontrada = await this.tallasRepository.findOneBy({
          id_talla: id,
          estado_talla: true
        });
    
        if (!tallaEncontrada) {
          throw new HttpException('Talla no encontrado', HttpStatus.NOT_FOUND);
        }
    
        if (!tallaEncontrada.estado_talla) {
          throw new HttpException('Talla Eliminado', HttpStatus.NOT_FOUND);
        }
    
        return tallaEncontrada;
     } 
    
    async insertarTallas(datosdelFrontend: CrearTallasDto){
        const tallaEncontrada = await this.tallasRepository.findOneBy({
            talla: datosdelFrontend.talla,
        })

        if (tallaEncontrada) {
            throw new HttpException('talla ya existe en la base de datos', HttpStatus.CONFLICT)
        }

        const nuevaTalla = await this.tallasRepository.create(datosdelFrontend)
        await this.tallasRepository.save(nuevaTalla)
        return { talla: "Se guardo Correctamente" }
    }
}
