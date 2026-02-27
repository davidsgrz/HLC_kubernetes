"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const pelicula_entidad_1 = require("./peliculas/entidades/pelicula.entidad");
const pokemon_entidad_1 = require("./pokemon/entidades/pokemon.entidad");
const peliculas_modulo_1 = require("./peliculas/peliculas.modulo");
const pokemon_modulo_1 = require("./pokemon/pokemon.modulo");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'sqlite',
                database: 'pokenest.db',
                entities: [pelicula_entidad_1.Pelicula, pokemon_entidad_1.Pokemon],
                synchronize: true,
            }),
            peliculas_modulo_1.PeliculasModulo,
            pokemon_modulo_1.PokemonModulo,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map