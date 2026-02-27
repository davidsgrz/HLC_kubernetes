import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pelicula } from './peliculas/entidades/pelicula.entidad';
import { Pokemon } from './pokemon/entidades/pokemon.entidad';
import { PeliculasModulo } from './peliculas/peliculas.modulo';
import { PokemonModulo } from './pokemon/pokemon.modulo';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'pokenest.db',
      entities: [Pelicula, Pokemon],
      synchronize: true,
    }),
    PeliculasModulo,
    PokemonModulo,
  ],
})
export class AppModule {}
