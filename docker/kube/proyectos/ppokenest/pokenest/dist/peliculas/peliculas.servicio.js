"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PeliculasServicio = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const pelicula_entidad_1 = require("./entidades/pelicula.entidad");
let PeliculasServicio = class PeliculasServicio {
    peliculaRepo;
    constructor(peliculaRepo) {
        this.peliculaRepo = peliculaRepo;
    }
    async onModuleInit() {
        const count = await this.peliculaRepo.count();
        if (count === 0) {
            await this.peliculaRepo.save([
                { title: 'La La Land', director: 'Steve McQueen', year: 2010, length_minutes: 81 },
                { title: 'Zootopia', director: 'Steve McQueen', year: 2014, length_minutes: 95 },
                { title: 'Deadpool', director: 'Steve McQueen', year: 2016, length_minutes: 93 },
                { title: 'Monsters, Inc.', director: 'Pete Docter', year: 2015, length_minutes: 92 },
                { title: 'Finding Nemo', director: 'Andrew Stanton', year: 2013, length_minutes: 107 },
                { title: 'The Nice Guys', director: 'Richard Linklater', year: 1996, length_minutes: 116 },
                { title: 'Bee Movie', director: 'Steve McQueen', year: 2016, length_minutes: 117 },
                { title: 'Begin Again', director: 'Richard Linklater', year: 2017, length_minutes: 115 },
                { title: 'WALL-E', director: 'Andrew Stanton', year: 1999, length_minutes: 104 },
                { title: 'Up', director: 'Joel Coen', year: 2009, length_minutes: 101 },
                { title: 'Boss Baby', director: 'Lee Unkrich', year: 2010, length_minutes: 103 },
                { title: 'X-Men Apocalypse', director: 'Steve McQueen', year: 1998, length_minutes: 120 },
                { title: 'Moana', director: 'Brenda Chapman', year: 2012, length_minutes: 102 },
                { title: 'Frozen', director: 'Dan Scanion', year: 2013, length_minutes: 110 },
            ]);
        }
    }
    findAll() {
        return this.peliculaRepo.find();
    }
    filtrar(dto) {
        const query = this.peliculaRepo.createQueryBuilder('pelicula');
        if (dto.title) {
            query.andWhere('pelicula.title LIKE :title', { title: `%${dto.title}%` });
        }
        if (dto.yearFrom !== undefined) {
            query.andWhere('pelicula.year >= :yearFrom', { yearFrom: dto.yearFrom });
        }
        if (dto.yearTo !== undefined) {
            query.andWhere('pelicula.year <= :yearTo', { yearTo: dto.yearTo });
        }
        return query.getMany();
    }
};
exports.PeliculasServicio = PeliculasServicio;
exports.PeliculasServicio = PeliculasServicio = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(pelicula_entidad_1.Pelicula)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PeliculasServicio);
//# sourceMappingURL=peliculas.servicio.js.map