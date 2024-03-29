import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AccesoEntity } from './accesos.entity';
import { PerfilesEntity } from '../perfiles/perfiles.entity';
import { ModuloEntity } from '../modulos/modulos.entity';
import { CrearPermisosDTO } from './dto/accesos.dto.entity';

@Injectable()
export class AccesosService {
  constructor(
    @InjectRepository(AccesoEntity)
    private accesoRepository: Repository<AccesoEntity>,
    @InjectRepository(PerfilesEntity)
    private PerfilEntity: Repository<PerfilesEntity>,
    @InjectRepository(ModuloEntity)
    private ModuloEntity: Repository<ModuloEntity>,
  ) {}

  obtenerDatos() {
    return this.accesoRepository.find({
      order: {
        id_acceso: 'DESC',
      },
      where: {
        activo: true,
      },
    });
  }

  async postPermisoDatos(permisosModulo: CrearPermisosDTO) {
    let errores: string[] = [];
  
    // Validar si existen permisos existentes para los perfiles y módulos proporcionados
    for (const permiso of permisosModulo.permisosmodulos) {
      const { id_perfil, id_modulo } = permiso;

     
  
      // Verificar si el perfil y el módulo existen en la base de datos
      const perfilExistente = await this.PerfilEntity.findOne({
        where: {
          id_perfil: id_perfil
        }
      })
      const moduloExistente =await this.ModuloEntity.findOne({
        where: {
          id_modulo: id_modulo
        }
      })
  
      if (!perfilExistente) {
        errores.push(`El perfil con ID ${id_perfil} no existe.`);
      }
  
      if (!moduloExistente) {
        errores.push(`El módulo con ID ${id_modulo} no existe.`);
      }
    }
  
    // Si se encontraron errores, lanzar una excepción
    if (errores.length > 0) {
      throw new HttpException(
        `Hubo errores al crear algunos permisos: ${errores.join(', ')}`,
        HttpStatus.CONFLICT,
      );
    }
  
    // Crear los nuevos permisos
    for (const permiso of permisosModulo.permisosmodulos) {
      const { id_perfil, id_modulo, activo } = permiso;
      const nuevoPermiso = this.accesoRepository.create({
        perfiles: await this.PerfilEntity.findOne({
            where: {
              id_perfil: id_perfil
            }
          }),
          modulos: await this.ModuloEntity.findOne({
            where: {
              id_modulo: id_modulo
            }
          }),
        activo: activo,
      });
      await this.accesoRepository.save(nuevoPermiso);
      return 'Permisos creados correctamente';
    }
  }
  
  

  async putPermisoDatos(permisosModulo: CrearPermisosDTO) {
    let errores: string[] = [];

    // Verificar si hay algún error en los permisos proporcionados
    for (const permiso of permisosModulo.permisosmodulos) {
      const { id_perfil, id_modulo } = permiso;
      const existente = await this.accesoRepository.findOne({
        where: {
          perfiles: { id_perfil: id_perfil },
          modulos: { id_modulo: id_modulo },
        },
      });

      if (!existente) {
        errores.push(`No se encontró el permiso para el perfil ${id_perfil} y el módulo ${id_modulo}`);
      }
    }

    // Si se encontraron errores, lanzar una excepción
    if (errores.length > 0) {
      throw new HttpException(
        `Hubo errores al actualizar algunos permisos: ${errores.join(', ')}`,
        HttpStatus.BAD_REQUEST,
      );
    }

    // Actualizar los permisos
    for (const permiso of permisosModulo.permisosmodulos) {
      const { id_perfil, id_modulo, activo } = permiso;
      await this.accesoRepository.update(
        { perfiles: { id_perfil: id_perfil }, modulos: { id_modulo: id_modulo } },
        { activo },
      );
    }

    return 'Permisos actualizados correctamente';
  }
}
