import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ProductosEntity } from './productos.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CrearProductoDto, UpdateProductoDto } from './dto/productos.dto';
import { CloudinaryService } from '../cloudinary/cloudinary.service';
import { UsuariosEntity } from '../usuarios/usuarios.entity';
import { CategoriasEntity } from '../categorias/categorias.entity';
import { TallasEntity } from '../tallas/tallas.entity';
import { MarcasEntity } from '../marcas/marcas.entity';
import { GenerosEntity } from '../generos/generos.entity';
import { UpdateUsuarioDto } from '../usuarios/dto/usuarios.dto';

@Injectable()
export class ProductosService {

  constructor(@InjectRepository(ProductosEntity) private productoRepository: Repository<ProductosEntity>,
    private readonly cloudinaryService: CloudinaryService,
    @InjectRepository(UsuariosEntity) private usuarioReposiotry: Repository<UsuariosEntity>,
    @InjectRepository(CategoriasEntity) private CategoriasEntity: Repository<CategoriasEntity>,
    @InjectRepository(TallasEntity) private TallasEntity: Repository<TallasEntity>,
    @InjectRepository(MarcasEntity) private MarcasEntity: Repository<MarcasEntity>,
    @InjectRepository(GenerosEntity) private GenerosEntity: Repository<GenerosEntity>,


  ) { }

  async crearProducto(datosFrontend: CrearProductoDto, imagen: Express.Multer.File) {

    const usuarioEncontrado = await this.usuarioReposiotry.findOneBy({
      id_usuario: parseInt(datosFrontend.id_usuario, 10),
      estado_usuario: true,
    });


    if (!usuarioEncontrado) {
      throw new HttpException('Usuario no encontrado ', HttpStatus.NOT_FOUND);
    }

    const categoriaEncontrada = await this.CategoriasEntity.findOneBy({
      id_categoria: parseInt(datosFrontend.id_categoria, 10),
      estado_categoria: true,
    });


    if (!categoriaEncontrada) {
      throw new HttpException('Categoria no encontrado ', HttpStatus.NOT_FOUND);
    }

    const tallaEncontrada = await this.TallasEntity.findOneBy({
      id_talla: parseInt(datosFrontend.id_talla, 10),
      estado_talla: true,
    });


    if (!tallaEncontrada) {
      throw new HttpException('Talla no encontrado ', HttpStatus.NOT_FOUND);
    }

    const marcaEncontrada = await this.MarcasEntity.findOneBy({
      id_marca: parseInt(datosFrontend.id_marca, 10),
      estado_marca: true,
    });


    if (!marcaEncontrada) {
      throw new HttpException('Marca no encontrado ', HttpStatus.NOT_FOUND);
    }

    const generoEcontrado = await this.GenerosEntity.findOneBy({
      id_genero: parseInt(datosFrontend.id_genero, 10),
      estado_genero: true,
    });


    if (!generoEcontrado) {
      throw new HttpException('Genero no encontrado ', HttpStatus.NOT_FOUND);
    }

    const productoEcontrado = await this.productoRepository.findOneBy({
      nombre_producto: datosFrontend.nombre_producto,
    });

    if (productoEcontrado) {
      throw new HttpException('Este Producto ya existe', HttpStatus.CONFLICT);
    }



    let imagenUrl: string | null = null;  // Inicializa imagenUrl como null

    // Verifica si la imagen está definida antes de intentar subirla a Cloudinary
    if (imagen) {
      const cloudinaryResponse = await this.cloudinaryService.uploadFile(imagen);
      imagenUrl = cloudinaryResponse.secure_url;
    }




    const nuevoDato = this.productoRepository.create({
      nombre_producto: datosFrontend.nombre_producto,
      descripcion: datosFrontend.descripcion,
      precio: datosFrontend.precio,
      stock: datosFrontend.stock,
      imagen: imagenUrl,
      categoria: categoriaEncontrada,
      talla: tallaEncontrada,
      marca: marcaEncontrada,
      genero: generoEcontrado,
      usuario: usuarioEncontrado,
    });

    await this.productoRepository.save(nuevoDato);

    return { message: 'Se registró correctamente' };
  }




  obtenertodolosdatos() {
    return this.productoRepository.find({
      order: {
        id_producto: 'DESC',
      },
      where: {
        estado_producto: true
      },
    });
  }


  async obtenerPorID(id: number) {
    const datoEncontrado = await this.productoRepository.findOneBy({
      id_producto: id,
      estado_producto: true
    });

    if (!datoEncontrado) {
      throw new HttpException('Producto no encontrado', HttpStatus.NOT_FOUND);
    }

    if (!datoEncontrado.estado_producto) {
      throw new HttpException('Producto Eliminado', HttpStatus.NOT_FOUND);
    }

    return datoEncontrado;
  }

  async actualizar(id_producto: number, datosFrontend: UpdateProductoDto, imagen: Express.Multer.File) {


    const usuarioEncontrado = await this.usuarioReposiotry.findOneBy({
      id_usuario: parseInt(datosFrontend.id_usuario, 10),
      estado_usuario: true,
    });


    if (!usuarioEncontrado) {
      throw new HttpException('Usuario no encontrado ', HttpStatus.NOT_FOUND);
    }

    const categoriaEncontrada = await this.CategoriasEntity.findOneBy({
      id_categoria: parseInt(datosFrontend.id_categoria, 10),
      estado_categoria: true,
    });


    if (!categoriaEncontrada) {
      throw new HttpException('Categoria no encontrado ', HttpStatus.NOT_FOUND);
    }

    const tallaEncontrada = await this.TallasEntity.findOneBy({
      id_talla: parseInt(datosFrontend.id_talla, 10),
      estado_talla: true,
    });


    if (!tallaEncontrada) {
      throw new HttpException('Talla no encontrado ', HttpStatus.NOT_FOUND);
    }

    const marcaEncontrada = await this.MarcasEntity.findOneBy({
      id_marca: parseInt(datosFrontend.id_marca, 10),
      estado_marca: true,
    });


    if (!marcaEncontrada) {
      throw new HttpException('Marca no encontrado ', HttpStatus.NOT_FOUND);
    }

    const generoEcontrado = await this.GenerosEntity.findOneBy({
      id_genero: parseInt(datosFrontend.id_genero, 10),
      estado_genero: true,
    });


    if (!generoEcontrado) {
      throw new HttpException('Genero no encontrado ', HttpStatus.NOT_FOUND);
    }

    
    const productoEcontrado = await this.productoRepository.findOneBy({
      id_producto: id_producto,
    });

    if (!productoEcontrado) {
      throw new HttpException('Este Producto nose Encontro', HttpStatus.CONFLICT);
    }

    const productoIdValidarElnombre = await this.productoRepository.findOneBy({
      nombre_producto: datosFrontend.nombre_producto,
    });

    if (productoIdValidarElnombre && productoIdValidarElnombre.id_producto !== id_producto) {
      throw new HttpException('Producto ya existe en la base de datos', HttpStatus.CONFLICT);
    }

    // Verifica si el nombre de usuario se ha cambiado antes de comparar con otros usuarios
    if (datosFrontend.nombre_producto !== productoEcontrado.nombre_producto) {
      const mismoNombre = await this.productoRepository.findOneBy({
        nombre_producto: datosFrontend.nombre_producto,
      });

      if (mismoNombre) {
        throw new HttpException('Producto con el mismo nombre ya existe', HttpStatus.CONFLICT);
      }
    }

    
    let imagenUrl: string | null = productoEcontrado.imagen;  // Inicializa imagenUrl con el valor existente



    // Verifica si la imagen está definida antes de intentar subirla a Cloudinary
    if (imagen !== undefined) {
      const cloudinaryResponse = await this.cloudinaryService.uploadFile(imagen);

      if (!cloudinaryResponse) {
        throw new HttpException('Error uploading image to Cloudinary', HttpStatus.INTERNAL_SERVER_ERROR);
      }

      imagenUrl = cloudinaryResponse.secure_url;
    }




    const nuevoDato = this.productoRepository.create({
      nombre_producto: datosFrontend.nombre_producto,
      descripcion: datosFrontend.descripcion,
      precio: datosFrontend.precio,
      stock: datosFrontend.stock,
      imagen: imagenUrl,
      categoria: categoriaEncontrada,
      talla: tallaEncontrada,
      marca: marcaEncontrada,
      genero: generoEcontrado,
      usuario: usuarioEncontrado,
    });

    await this.productoRepository.update(id_producto,nuevoDato);

    return { message: 'Se actualizo correctamente' };
  }






}
