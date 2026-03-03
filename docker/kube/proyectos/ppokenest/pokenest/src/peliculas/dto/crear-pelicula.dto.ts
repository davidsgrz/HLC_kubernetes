import { IsInt, IsString, Min } from 'class-validator';

export class CrearPeliculaDto {
    @IsString()
    title: string;

    @IsString()
    director: string;

    @IsInt()
    @Min(1900)
    year: number;

    @IsInt()
    @Min(1)
    length_minutes: number;
}
