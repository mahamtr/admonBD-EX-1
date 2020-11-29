"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdenProductosControllerController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let OrdenProductosControllerController = class OrdenProductosControllerController {
    constructor(ordenProductosRepository) {
        this.ordenProductosRepository = ordenProductosRepository;
    }
    async create(ordenProductos) {
        return this.ordenProductosRepository.create(ordenProductos);
    }
    async count(where) {
        return this.ordenProductosRepository.count(where);
    }
    async find(filter) {
        return this.ordenProductosRepository.find(filter);
    }
    async updateAll(ordenProductos, where) {
        return this.ordenProductosRepository.updateAll(ordenProductos, where);
    }
    async findById(id, filter) {
        return this.ordenProductosRepository.findById(id, filter);
    }
    async updateById(id, ordenProductos) {
        await this.ordenProductosRepository.updateById(id, ordenProductos);
    }
    async replaceById(id, ordenProductos) {
        await this.ordenProductosRepository.replaceById(id, ordenProductos);
    }
    async deleteById(id) {
        await this.ordenProductosRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/orden-productos', {
        responses: {
            '200': {
                description: 'OrdenProductos model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.OrdenProductos) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.OrdenProductos, {
                    title: 'NewOrdenProductos',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrdenProductosControllerController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/orden-productos/count', {
        responses: {
            '200': {
                description: 'OrdenProductos model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.OrdenProductos)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrdenProductosControllerController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/orden-productos', {
        responses: {
            '200': {
                description: 'Array of OrdenProductos model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.OrdenProductos, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.OrdenProductos)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrdenProductosControllerController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/orden-productos', {
        responses: {
            '200': {
                description: 'OrdenProductos PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.OrdenProductos, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.OrdenProductos)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.OrdenProductos, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrdenProductosControllerController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/orden-productos/{id}', {
        responses: {
            '200': {
                description: 'OrdenProductos model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.OrdenProductos, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.OrdenProductos, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrdenProductosControllerController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/orden-productos/{id}', {
        responses: {
            '204': {
                description: 'OrdenProductos PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.OrdenProductos, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.OrdenProductos]),
    tslib_1.__metadata("design:returntype", Promise)
], OrdenProductosControllerController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/orden-productos/{id}', {
        responses: {
            '204': {
                description: 'OrdenProductos PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.OrdenProductos]),
    tslib_1.__metadata("design:returntype", Promise)
], OrdenProductosControllerController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/orden-productos/{id}', {
        responses: {
            '204': {
                description: 'OrdenProductos DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], OrdenProductosControllerController.prototype, "deleteById", null);
OrdenProductosControllerController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.OrdenProductosRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.OrdenProductosRepository])
], OrdenProductosControllerController);
exports.OrdenProductosControllerController = OrdenProductosControllerController;
//# sourceMappingURL=orden-productos-controller.controller.js.map