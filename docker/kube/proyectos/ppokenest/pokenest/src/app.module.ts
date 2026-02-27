import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pelicula } from './peliculas/entidades/pelicula.entidad';
import { Pokemon } from './pokemon/entidades/pokemon.entidad';
import { PeliculasModulo } from './peliculas/peliculas.modulo';
import { PokemonModulo } from './pokemon/pokemon.modulo';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST', 'localhost'),
        port: configService.get<number>('DB_PORT', 5432),
        username: configService.get<string>('DB_USERNAME', 'postgres'),
        password: configService.get<string>('DB_PASSWORD', 'usuario'),
        database: configService.get<string>('DB_NAME', 'pokenest'),
        entities: [Pelicula, Pokemon],
        synchronize: true,
      }),
    }),
    PeliculasModulo,
    PokemonModulo,
  ],
})
export class AppModule { }
