import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MarcasEntity } from './marcas.entity';
import { Repository } from 'typeorm';
import { CrearMarcasDto } from './dto/marcas.dto';

@Injectable()
export class MarcasService {

    constructor(@InjectRepository(MarcasEntity) private marcasRepository: Repository<MarcasEntity>) { }

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
