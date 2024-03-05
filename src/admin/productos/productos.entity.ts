
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { CategoriasEntity } from "../categorias/categorias.entity";
import { MarcasEntity } from "../marcas/marcas.entity";
import { TallasEntity } from "../tallas/tallas.entity";
import { GenerosEntity } from "../generos/generos.entity";
import { UsuariosEntity } from "../usuarios/usuarios.entity";


@Entity({name: "productos"})
export class ProductosEntity {

    @PrimaryGeneratedColumn()
    id_producto: number;

    @Column({ length: 16}) // Especifica la longitud máxima de la columna usuario
    nombre_producto: string;

    @Column() 
    descripcion: string;

    @Column({type:'double precision'}) 
    precio: number;

    
    @Column() 
    stock: number;

    @Column({nullable: true}) // Especifica la longitud máxima de la columna password
    imagen: string;

    @Column({default: true})
    estado_producto: boolean;

    @ManyToOne(() => CategoriasEntity, (categoria) => categoria.id_categoria, {
        // cascade: true,
        eager: true, // para que traiga todos los datos de la columna relacionada
      })
    @JoinColumn({name: "id_categoria"})
    categoria: CategoriasEntity



    @ManyToOne(() => MarcasEntity, (marca) => marca.id_marca, {
        // cascade: true,
        eager: true, // para que traiga todos los datos de la columna relacionada
      })
    @JoinColumn({name: "id_marca"})
    marca: MarcasEntity




    
    @ManyToOne(() => TallasEntity, (talla) => talla.id_talla, {
        // cascade: true,
        eager: true, // para que traiga todos los datos de la columna relacionada
      })
    @JoinColumn({name: "id_talla"})
    talla: TallasEntity




    
    @ManyToOne(() => GenerosEntity, (genero) => genero.id_genero, {
        // cascade: true,
        eager: true, // para que traiga todos los datos de la columna relacionada
      })
    @JoinColumn({name: "id_genero"})
    genero: GenerosEntity

    @ManyToOne(() => UsuariosEntity, (usuario) => usuario.id_usuario, {
        // cascade: true,
        eager: true, // para que traiga todos los datos de la columna relacionada
      })
    @JoinColumn({name: "id_usuario"})
    usuario: UsuariosEntity

    


    

}
