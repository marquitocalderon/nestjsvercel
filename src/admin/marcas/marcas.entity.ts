
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({name: "marcas"})
export class MarcasEntity {

    @PrimaryGeneratedColumn()
    id_marca: number;

    @Column({unique: true})
    marca: string;

    @Column({default: true})
    estado_marca: boolean;

}