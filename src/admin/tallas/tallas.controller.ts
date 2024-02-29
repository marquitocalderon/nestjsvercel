import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { TallasService } from './tallas.service';
import { CrearTallasDto } from './dto/tallas.dto';

@Controller('tallas')
export class TallasController {

    constructor(private tallasService: TallasService) {}

    @Get()
    getTallas(){
        return this.tallasService.obtenerTodaslasTallas()
    }

        
   
    @Get(':id')
    getTallasbyID(@Param('id', ParseIntPipe) id:number){
        return this.tallasService.obtenerPorID(id)
    }

    @Post()
    postTallas(@Body() datosdelFrontend: CrearTallasDto){

        return this.tallasService.insertarTallas(datosdelFrontend)
      
    }


}
