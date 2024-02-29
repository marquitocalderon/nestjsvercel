import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MarcasEntity } from './marcas.entity';
import { Repository } from 'typeorm';
import { CrearMarcasDto } from './dto/marcas.dto';

@Injectable()
export class MarcasService {

    constructor(@InjectRepository(MarcasEntity) private marcasRepository: Repository<MarcasEntity>) { }

    obtenerTodaslasMarcas() {
        return this.marcasRepository.find({
            order: {
                id_marca: 'DESC',
            },
            where: {
                estado_marca: true
            }
        })
    }

    async obtenerPorID(id: number) {
        const marcaEncontrada = await this.marcasRepository.findOneBy({
          id_marca: id,
          estado_marca: true
        });
    
        if (!marcaEncontrada) {
          throw new HttpException('Marca no encontrado', HttpStatus.NOT_FOUND);
        }
    
        if (!marcaEncontrada.estado_marca) {
          throw new HttpException('Marca Eliminado', HttpStatus.NOT_FOUND);
        }
    
        return marcaEncontrada;
     } 
    

    async insertarMarcas(datosdelFrontend: CrearMarcasDto){
        const marcaEncontrada = await this.marcasRepository.findOneBy({
            marca: datosdelFrontend.marca,
        })

        if (marcaEncontrada) {
            throw new HttpException('marca ya existe en la base de datos', HttpStatus.CONFLICT)
        }

        const nuevaMarca = await this.marcasRepository.create(datosdelFrontend)
        await this.marcasRepository.save(nuevaMarca)
        return { marca: "Se guardo Correctamente" }
    }

}
