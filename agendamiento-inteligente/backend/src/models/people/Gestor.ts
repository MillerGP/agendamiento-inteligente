import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import Usuario from "../security/Usuario";

@Entity('gestores', {schema: "people"})
export class Gestor {

    @PrimaryGeneratedColumn({ name: 'id_gestor' })
    idGestor: number;

    @Column({ type: 'varchar', length: 100, name: 'estado_gestor', nullable: false })
    estadoGestor: string;
    
    // Relaciones
    @OneToOne(() => Usuario, usuario => usuario.gestor)
    @JoinColumn({ name: 'id_usuario' })
    usuario: Usuario;
    
}
export default Gestor;