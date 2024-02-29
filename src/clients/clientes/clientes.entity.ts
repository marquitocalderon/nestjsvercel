
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "clientes"})
export class ClientesEntity {

    @PrimaryGeneratedColumn()
    id_cliente: number;

    @Column({ length: 50 })
    nombre_completo: string;

    @Column({ length: 8 , unique: true}) // Especifica la longitud máxima de la columna usuario
    dni: string;

    @Column({ length: 50 , unique: true}) 
    email: string;

    @Column({ length: 16 , unique: true}) 
    usuario: string;

    @Column({select: false}) 
    password: string;


    @Column({ length: 26}) 
    departamento: string;

    @Column({ length: 26}) 
    provincia: string;

    @Column({ length: 26}) 
    distrito: string;

    @Column({default: true})
    estado_cliente: boolean;


}
