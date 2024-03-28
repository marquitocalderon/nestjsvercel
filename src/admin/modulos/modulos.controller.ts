import { Controller, Get } from '@nestjs/common';
import { ModulosService } from './modulos.service';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('modulos')
export class ModulosController {


    constructor(private moduloServicio: ModulosService){}

    @ApiBearerAuth()
    @Get()
    getModulos(){
        return this.moduloServicio.obtenerTodos()
    }   
}
