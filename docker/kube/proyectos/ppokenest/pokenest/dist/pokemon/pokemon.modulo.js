"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonModulo = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const pokemon_entidad_1 = require("./entidades/pokemon.entidad");
const pokemon_servicio_1 = require("./pokemon.servicio");
const pokemon_controlador_1 = require("./pokemon.controlador");
let PokemonModulo = class PokemonModulo {
};
exports.PokemonModulo = PokemonModulo;
exports.PokemonModulo = PokemonModulo = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([pokemon_entidad_1.Pokemon])],
        providers: [pokemon_servicio_1.PokemonServicio],
        controllers: [pokemon_controlador_1.PokemonControlador],
    })
], PokemonModulo);
//# sourceMappingURL=pokemon.modulo.js.map