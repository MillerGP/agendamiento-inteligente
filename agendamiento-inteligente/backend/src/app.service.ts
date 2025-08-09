import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '¡Bienvenido a la API de Agendamiento Inteligente! 🚀';
  }

  getSystemInfo(): { name: string; version: string; description: string } {
    return {
      name: 'Agendamiento Inteligente API',
      version: '1.0.0',
      description: 'Sistema de agendamiento inteligente que optimiza la gestión de citas y recursos',
    };
  }
} 