import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { JwtModule } from '@nestjs/jwt';
import { UsuariosModule } from '../usuarios/usuarios.module';


@Module({
  imports: [UsuariosModule,
    JwtModule.register({
      global: true,
    }),],
  controllers: [AuthController],
  providers: [AuthService]
})  
export class AuthModule {}
