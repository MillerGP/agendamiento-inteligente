import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import Usuario from "./Usuario";

@Entity('especialistas', { schema: 'people' })
export class Especialista {

    //Modelo Tabla

    @PrimaryGeneratedColumn({ name: 'id_especialista' })
    idEspecialista: number;

    @Column({ type: 'varchar', length: 255, name: 'especialidad', nullable: false })
    especialidad: string;

    @Column({ type: 'varchar', length: 100, name: 'estado_especialista', nullable: false })
    estadoEspecialista: string;

    // Relaciones

    @OneToOne(() => Usuario, usuario => usuario.especialista)
    @JoinColumn({ name: 'id_usuario' })
    usuario: Usuario;
}
export default Especialista;