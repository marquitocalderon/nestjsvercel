import { Body, Controller, Post } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { CrearClienteDto } from './dto/clientes.dto';

@Controller('clientes')
export class ClientesController {

    constructor(private clientesService: ClientesService){}


    @Post()
    postClientes(@Body() datosDelFrontendCliente: CrearClienteDto){
        return this.clientesService.insertarClientes(datosDelFrontendCliente)

    }
}
