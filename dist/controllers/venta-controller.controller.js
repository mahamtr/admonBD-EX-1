"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VentaControllerController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let VentaControllerController = class VentaControllerController {
    constructor(ventaRepository) {
        this.ventaRepository = ventaRepository;
    }
    async create(venta) {
        return this.ventaRepository.create(venta);
    }
    async count(where) {
        return this.ventaRepository.count(where);
    }
    async find(filter) {
        return this.ventaRepository.find(filter);
    }
    async updateAll(venta, where) {
        return this.ventaRepository.updateAll(venta, where);
    }
    async findById(id, filter) {
        return this.ventaRepository.findById(id, filter);
    }
    async updateById(id, venta) {
        await this.ventaRepository.updateById(id, venta);
    }
    async replaceById(id, venta) {
        await this.ventaRepository.replaceById(id, venta);
    }
    async deleteById(id) {
        await this.ventaRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/ventas', {
        responses: {
            '200': {
                description: 'Venta model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Venta) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Venta, {
                    title: 'NewVenta',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], VentaControllerController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/ventas/count', {
        responses: {
            '200': {
                description: 'Venta model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Venta)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], VentaControllerController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/ventas', {
        responses: {
            '200': {
                description: 'Array of Venta model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.Venta, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Venta)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], VentaControllerController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/ventas', {
        responses: {
            '200': {
                description: 'Venta PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Venta, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Venta)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Venta, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], VentaControllerController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/ventas/{id}', {
        responses: {
            '200': {
                description: 'Venta model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.Venta, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Venta, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], VentaControllerController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/ventas/{id}', {
        responses: {
            '204': {
                description: 'Venta PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Venta, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Venta]),
    tslib_1.__metadata("design:returntype", Promise)
], VentaControllerController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/ventas/{id}', {
        responses: {
            '204': {
                description: 'Venta PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Venta]),
    tslib_1.__metadata("design:returntype", Promise)
], VentaControllerController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/ventas/{id}', {
        responses: {
            '204': {
                description: 'Venta DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], VentaControllerController.prototype, "deleteById", null);
VentaControllerController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.VentaRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.VentaRepository])
], VentaControllerController);
exports.VentaControllerController = VentaControllerController;
//# sourceMappingURL=venta-controller.controller.js.map