import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Rol } from './Rol';
import Usuario from './Usuario';

@Entity('administradores', { schema: "security" })
export class Administrador {
    @PrimaryGeneratedColumn({ name: 'id_administrador' })
    public idAdministrador: number;

    @Column({ type: 'varchar', name: 'nivel_acceso', default: Rol.ADMINISTRADOR })
    public nivelAcceso: string;

    @Column({ type: 'boolean', name: 'activo_administrador', default: true })
    public activo: boolean;

    // Relación 1:1 con Usuario
    @OneToOne(() => Usuario, usuario => usuario.administrador)
    @JoinColumn({ name: 'id_usuario' })
    usuario: Usuario;
}