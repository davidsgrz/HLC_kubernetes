import { OnModuleInit } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Pelicula } from './entidades/pelicula.entidad';
import { FiltrarPeliculaDto } from './dto/filtrar-pelicula.dto';
export declare class PeliculasServicio implements OnModuleInit {
    private peliculaRepo;
    constructor(peliculaRepo: Repository<Pelicula>);
    onModuleInit(): Promise<void>;
    findAll(): Promise<Pelicula[]>;
    filtrar(dto: FiltrarPeliculaDto): Promise<Pelicula[]>;
}
