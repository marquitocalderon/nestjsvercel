import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { JwtModule } from '@nestjs/jwt';
import { UsuariosModule } from '../usuarios/usuarios.module';
import { ClientesModule } from 'src/clients/clientes/clientes.module';
import { AccesosModule } from '../accesos/accesos.module';


@Module({
  imports: [UsuariosModule,ClientesModule,AccesosModule,
    JwtModule.register({
      global: true,
    }),],
  controllers: [AuthController],
  providers: [AuthService]
})  
export class AuthModule {}
