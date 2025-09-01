import { Column, CreateDateColumn, Entity, OneToOne, PrimaryGeneratedColumn, TableInheritance, UpdateDateColumn } from 'typeorm';
import { Administrador } from './Administrador';
import Cliente from './Cliente';
import Especialista from './Especialista';
import Gestor from './Gestor';
import { Rol } from './Rol';

@Entity('usuarios', { schema: 'security' })
@TableInheritance({ column: { type: 'varchar', name: 'tipo' } })
abstract class Usuario {
    // Modelo Tabla Usuario

    @PrimaryGeneratedColumn({name: 'id_usuario'})
    public idUsuario: number;

    @Column({ type: 'varchar', length: 100, name: 'nombre_usuario', nullable: false })
    public nombreUsuario: string;

    @Column({ type: 'varchar', length: 100, name: 'apellido_usuario', nullable: false })
    public apellidoUsuario: string;

    @Column({ type: 'varchar', length: 150, name: 'email_usuario', nullable: false, unique: true })
    public emailUsuario: string;

    @Column({ type: 'varchar', name: 'telefono_usuario', nullable: false })
    public telefonoUsuario: string;

    @Column({ type: 'varchar', length: 100, name: 'password_usuario', nullable: false })
    public passwordUsuario: string;

    @Column({ type: 'boolean', name: 'estado_usuario', default: true })
    public estadoUsuario: boolean;

    @Column({ type: 'enum', enum: Rol, name: 'rol_usuario', default: Rol.CLIENTE })
    rol: Rol;

    @CreateDateColumn({ name: 'fecha_creacion' })
    public fechaCreacion: Date;

    @UpdateDateColumn({ name: 'fecha_actualizacion' })
    public fechaActualizacion: Date;

    // Relaciones con otras tablas

    @OneToOne(() => Cliente, cliente => cliente.usuario, { cascade: true })
    cliente?: Cliente;

    @OneToOne(() => Gestor, gestor => gestor.usuario, { cascade: true })
    gestor?: Gestor;

    @OneToOne(() => Especialista, especialista => especialista.usuario, { cascade: true })
    especialista?: Especialista;

    @OneToOne(() => Administrador, administrador => administrador.usuario, { cascade: true })
    administrador?: Administrador;
}

export default Usuario;
