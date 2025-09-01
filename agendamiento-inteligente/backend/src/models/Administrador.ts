import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import Usuario from './Usuario';

@Entity('administradores', { schema: "app" })
export class Administrador {
    @PrimaryGeneratedColumn({ name: 'id_administrador' })
    public idAdministrador: number;

    @Column({ type: 'integer', name: 'nivel_acceso', default: 1 })
    public nivelAcceso: number;

    @Column({ type: 'boolean', name: 'activo_administrador', default: true })
    public activo: boolean;

    // Relación 1:1 con Usuario
    @OneToOne(() => Usuario, usuario => usuario.administrador)
    @JoinColumn({ name: 'id_usuario' })
    usuario: Usuario;
}