"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PeliculasModulo = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const pelicula_entidad_1 = require("./entidades/pelicula.entidad");
const peliculas_servicio_1 = require("./peliculas.servicio");
const peliculas_controlador_1 = require("./peliculas.controlador");
let PeliculasModulo = class PeliculasModulo {
};
exports.PeliculasModulo = PeliculasModulo;
exports.PeliculasModulo = PeliculasModulo = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([pelicula_entidad_1.Pelicula])],
        providers: [peliculas_servicio_1.PeliculasServicio],
        controllers: [peliculas_controlador_1.PeliculasControlador],
    })
], PeliculasModulo);
//# sourceMappingURL=peliculas.modulo.js.map