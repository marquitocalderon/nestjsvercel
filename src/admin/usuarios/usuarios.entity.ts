
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { PerfilesEntity } from "../perfiles/perfiles.entity";

@Entity({name: "usuarios"})
export class UsuariosEntity {

    @PrimaryGeneratedColumn()
    id_usuario: number;

    @Column({ length: 16 , unique: true}) // Especifica la longitud máxima de la columna usuario
    usuario: string;


    @Column({select: false}) // Especifica la longitud máxima de la columna password
    password: string;

    @Column({nullable: true}) // Especifica la longitud máxima de la columna password
    imagen: string;

    @Column({default: true})
    estado_usuario: boolean;

    @ManyToOne(() => PerfilesEntity, (perfil) => perfil.id_perfil, {
        // cascade: true,
        eager: true, // para que traiga todos los datos de la columna relacionada
      })
    @JoinColumn({name: "idperfil"})
    perfiles: PerfilesEntity

    

}
