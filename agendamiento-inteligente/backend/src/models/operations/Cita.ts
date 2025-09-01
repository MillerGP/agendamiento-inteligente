import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CreateDateColumn } from 'typeorm';
import Cliente from "../people/Cliente";

@Entity('citas', { schema: 'operations' })
export class Cita {

    // Modelo Tabla Cita

    @PrimaryGeneratedColumn({ name: 'id_cita' })
    idCita: number;

    @CreateDateColumn({ name: 'fecha_hora_inicio', type: 'timestamp' })
    fechaHoraInicio: Date;

    @CreateDateColumn({ name: 'fecha_hora_fin', type: 'timestamp' })
    fechaHoraFin: Date;

    @Column({ type: 'varchar', length: 300, name: 'descripcion_cita', nullable: false })
    descripcionCita: string;

    //Relaciones

    @ManyToOne(() => Cliente, cliente => cliente.citas)
    @JoinColumn({ name: 'id_cliente' })
    cliente: Cliente;
}