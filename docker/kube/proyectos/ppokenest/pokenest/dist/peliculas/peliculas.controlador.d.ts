import { PeliculasServicio } from './peliculas.servicio';
import { FiltrarPeliculaDto } from './dto/filtrar-pelicula.dto';
import { Pelicula } from './entidades/pelicula.entidad';
export declare class PeliculasControlador {
    private readonly peliculasServicio;
    constructor(peliculasServicio: PeliculasServicio);
    findAll(): Promise<Pelicula[]>;
    filtrar(dto: FiltrarPeliculaDto): Promise<Pelicula[]>;
}
