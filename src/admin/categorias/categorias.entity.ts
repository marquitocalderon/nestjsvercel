
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({name: "categorias"})
export class CategoriasEntity {

    @PrimaryGeneratedColumn()
    id_categoria: number;

    @Column({unique: true})
    categoria: string;

    @Column({default: true})
    estado_categoria: boolean;

}