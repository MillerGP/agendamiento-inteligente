import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { Cita } from "./models/operations/Cita";
import { Cliente } from "./models/people/Cliente";
import { Especialista } from "./models/people/Especialista";
import { Gestor } from "./models/people/Gestor";
import { Administrador } from "./models/security/Administrador";
import { Rol } from "./models/security/Rol";
import { Usuario } from "./models/security/Usuario";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Hace que ConfigService esté disponible globalmente
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: "postgres",
        host: configService.get("DB_HOST") || "localhost",
        port: configService.get<number>("DB_PORT", 5432), // Valor por defecto 5432
        username: configService.get("DB_USERNAME"),
        password: configService.get("DB_PASSWORD"),
        database: configService.get("DB_DATABASE"),
        entities: [
          Cita,
          Rol,
          Cliente,
          Especialista,
          Gestor,
          Administrador,
          Usuario,
        ],
        migrations: ['migrations/*.ts'],
        migrationsRun: true, // Ejecuta migraciones automáticamente
        synchronize: true,
        logging: true, // ← MUY IMPORTANTE para debug
        retryDelay: 3000,
        retryAttempts: 3,
        autoLoadEntities: false,
      } as any),
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}