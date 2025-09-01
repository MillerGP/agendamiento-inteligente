import { Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Cita } from './Cita';
import Usuario from './Usuario';

@Entity('clientes', {'schema': "people"})
export class Cliente {
    // Modelo Tabla Cliente

    @PrimaryGeneratedColumn({name: 'id_cliente'})
    public idCliente: number;


    //Relaciones

    @OneToOne(() => Usuario, usuario => usuario.cliente)
    @JoinColumn({ name: 'id_usuario' })
    usuario: Usuario;

    @OneToMany(() => Cita, cita => cita.cliente)
    citas?: Cita[];
}
export default Cliente;

