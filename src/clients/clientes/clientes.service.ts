import { ConflictException,Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClientesEntity } from './clientes.entity';
import { Repository } from 'typeorm';
import * as bcryptjs from 'bcryptjs'
import { CrearClienteDto } from './dto/clientes.dto';

@Injectable()
export class ClientesService {


    constructor(@InjectRepository(ClientesEntity) private clientesRepository: Repository<ClientesEntity>) { }




     
  buscarParaLoginCLiente(usuario: string) {
    return this.clientesRepository.findOne({
      where: {
        usuario: usuario,
      },
      select:["id_cliente","usuario","password","email","departamento", "provincia","distrito","nombre_completo"]
    });
  }



    async insertarClientes(datosDelFrontendCliente: CrearClienteDto) {

        const usuarioEncontrado = await this.clientesRepository.findOneBy({
            usuario: datosDelFrontendCliente.usuario,
        });

        if (usuarioEncontrado) {
            throw new ConflictException("Este usuario ya existe, Elija otro")
        }

        const emailEncontrado = await this.clientesRepository.findOneBy({
            email: datosDelFrontendCliente.email,
        });

        if (emailEncontrado) {
            throw new ConflictException("Este email ya existe, Elija otro")
        }

        const nuevoCliente = this.clientesRepository.create({
            nombre_completo: datosDelFrontendCliente.nombre_completo,
            email: datosDelFrontendCliente.email,
            usuario: datosDelFrontendCliente.usuario,
            password: await bcryptjs.hash(datosDelFrontendCliente.password, 10),
            departamento: datosDelFrontendCliente.departamento,
            provincia: datosDelFrontendCliente.provincia,
            distrito: datosDelFrontendCliente.distrito
          });
      
        await this.clientesRepository.save(nuevoCliente)
        return { cliente: "Se guardo Correctamente" }
    }


}
