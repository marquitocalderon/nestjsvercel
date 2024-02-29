
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({name: "tallas"})
export class TallasEntity {

    @PrimaryGeneratedColumn()
    id_talla: number;

    @Column({unique: true})
    talla: string;

    @Column({default: true})
    estado_talla: boolean;

}