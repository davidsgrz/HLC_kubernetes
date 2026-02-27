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
exports.PokemonControlador = void 0;
const common_1 = require("@nestjs/common");
const pokemon_servicio_1 = require("./pokemon.servicio");
const filtrar_pokemon_dto_1 = require("./dto/filtrar-pokemon.dto");
const crear_pokemon_dto_1 = require("./dto/crear-pokemon.dto");
let PokemonControlador = class PokemonControlador {
    pokemonServicio;
    constructor(pokemonServicio) {
        this.pokemonServicio = pokemonServicio;
    }
    findAll() {
        return this.pokemonServicio.findAll();
    }
    filtrar(dto) {
        return this.pokemonServicio.filtrar(dto);
    }
    create(dto) {
        return this.pokemonServicio.create(dto);
    }
};
exports.PokemonControlador = PokemonControlador;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PokemonControlador.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('filtrar'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filtrar_pokemon_dto_1.FiltrarPokemonDto]),
    __metadata("design:returntype", Promise)
], PokemonControlador.prototype, "filtrar", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [crear_pokemon_dto_1.CrearPokemonDto]),
    __metadata("design:returntype", Promise)
], PokemonControlador.prototype, "create", null);
exports.PokemonControlador = PokemonControlador = __decorate([
    (0, common_1.Controller)('pokemon'),
    __metadata("design:paramtypes", [pokemon_servicio_1.PokemonServicio])
], PokemonControlador);
//# sourceMappingURL=pokemon.controlador.js.map