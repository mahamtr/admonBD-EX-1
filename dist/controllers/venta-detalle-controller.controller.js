"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VentaDetalleControllerController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let VentaDetalleControllerController = class VentaDetalleControllerController {
    constructor(ventaDetalleRepository) {
        this.ventaDetalleRepository = ventaDetalleRepository;
    }
    async create(ventaDetalle) {
        return this.ventaDetalleRepository.create(ventaDetalle);
    }
    async count(where) {
        return this.ventaDetalleRepository.count(where);
    }
    async find(filter) {
        return this.ventaDetalleRepository.find(filter);
    }
    async updateAll(ventaDetalle, where) {
        return this.ventaDetalleRepository.updateAll(ventaDetalle, where);
    }
    async findById(id, filter) {
        return this.ventaDetalleRepository.findById(id, filter);
    }
    async updateById(id, ventaDetalle) {
        await this.ventaDetalleRepository.updateById(id, ventaDetalle);
    }
    async replaceById(id, ventaDetalle) {
        await this.ventaDetalleRepository.replaceById(id, ventaDetalle);
    }
    async deleteById(id) {
        await this.ventaDetalleRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/venta-detalles', {
        responses: {
            '200': {
                description: 'VentaDetalle model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.VentaDetalle) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.VentaDetalle, {
                    title: 'NewVentaDetalle',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], VentaDetalleControllerController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/venta-detalles/count', {
        responses: {
            '200': {
                description: 'VentaDetalle model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.VentaDetalle)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], VentaDetalleControllerController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/venta-detalles', {
        responses: {
            '200': {
                description: 'Array of VentaDetalle model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.VentaDetalle, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.VentaDetalle)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], VentaDetalleControllerController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/venta-detalles', {
        responses: {
            '200': {
                description: 'VentaDetalle PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.VentaDetalle, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.VentaDetalle)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.VentaDetalle, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], VentaDetalleControllerController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/venta-detalles/{id}', {
        responses: {
            '200': {
                description: 'VentaDetalle model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.VentaDetalle, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.VentaDetalle, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], VentaDetalleControllerController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/venta-detalles/{id}', {
        responses: {
            '204': {
                description: 'VentaDetalle PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.VentaDetalle, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.VentaDetalle]),
    tslib_1.__metadata("design:returntype", Promise)
], VentaDetalleControllerController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/venta-detalles/{id}', {
        responses: {
            '204': {
                description: 'VentaDetalle PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.VentaDetalle]),
    tslib_1.__metadata("design:returntype", Promise)
], VentaDetalleControllerController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/venta-detalles/{id}', {
        responses: {
            '204': {
                description: 'VentaDetalle DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], VentaDetalleControllerController.prototype, "deleteById", null);
VentaDetalleControllerController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.VentaDetalleRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.VentaDetalleRepository])
], VentaDetalleControllerController);
exports.VentaDetalleControllerController = VentaDetalleControllerController;
//# sourceMappingURL=venta-detalle-controller.controller.js.map