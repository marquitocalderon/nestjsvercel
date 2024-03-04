
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({name: "generos"})
export class GenerosEntity {

    @PrimaryGeneratedColumn()
    id_genero: number;

    @Column({unique: true})
    genero: string;

    @Column({default: true})
    estado_genero: boolean;

}