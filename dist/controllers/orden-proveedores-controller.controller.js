"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdenProveedoresControllerController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let OrdenProveedoresControllerController = class OrdenProveedoresControllerController {
    constructor(ordenProveedoresRepository) {
        this.ordenProveedoresRepository = ordenProveedoresRepository;
    }
    async create(ordenProveedores) {
        return this.ordenProveedoresRepository.create(ordenProveedores);
    }
    async count(where) {
        return this.ordenProveedoresRepository.count(where);
    }
    async find(filter) {
        return this.ordenProveedoresRepository.find(filter);
    }
    async updateAll(ordenProveedores, where) {
        return this.ordenProveedoresRepository.updateAll(ordenProveedores, where);
    }
    async findById(id, filter) {
        return this.ordenProveedoresRepository.findById(id, filter);
    }
    async updateById(id, ordenProveedores) {
        await this.ordenProveedoresRepository.updateById(id, ordenProveedores);
    }
    async replaceById(id, ordenProveedores) {
        await this.ordenProveedoresRepository.replaceById(id, ordenProveedores);
    }
    async deleteById(id) {
        await this.ordenProveedoresRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/orden-proveedores', {
        responses: {
            '200': {
                description: 'OrdenProveedores model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.OrdenProveedores) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.OrdenProveedores, {
                    title: 'NewOrdenProveedores',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrdenProveedoresControllerController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/orden-proveedores/count', {
        responses: {
            '200': {
                description: 'OrdenProveedores model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.OrdenProveedores)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrdenProveedoresControllerController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/orden-proveedores', {
        responses: {
            '200': {
                description: 'Array of OrdenProveedores model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.OrdenProveedores, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.OrdenProveedores)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrdenProveedoresControllerController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/orden-proveedores', {
        responses: {
            '200': {
                description: 'OrdenProveedores PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.OrdenProveedores, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.OrdenProveedores)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.OrdenProveedores, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrdenProveedoresControllerController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/orden-proveedores/{id}', {
        responses: {
            '200': {
                description: 'OrdenProveedores model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.OrdenProveedores, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.OrdenProveedores, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], OrdenProveedoresControllerController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/orden-proveedores/{id}', {
        responses: {
            '204': {
                description: 'OrdenProveedores PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.OrdenProveedores, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.OrdenProveedores]),
    tslib_1.__metadata("design:returntype", Promise)
], OrdenProveedoresControllerController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/orden-proveedores/{id}', {
        responses: {
            '204': {
                description: 'OrdenProveedores PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.OrdenProveedores]),
    tslib_1.__metadata("design:returntype", Promise)
], OrdenProveedoresControllerController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/orden-proveedores/{id}', {
        responses: {
            '204': {
                description: 'OrdenProveedores DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], OrdenProveedoresControllerController.prototype, "deleteById", null);
OrdenProveedoresControllerController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.OrdenProveedoresRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.OrdenProveedoresRepository])
], OrdenProveedoresControllerController);
exports.OrdenProveedoresControllerController = OrdenProveedoresControllerController;
//# sourceMappingURL=orden-proveedores-controller.controller.js.map