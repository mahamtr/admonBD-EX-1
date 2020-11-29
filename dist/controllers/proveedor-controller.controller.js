"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProveedorControllerController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ProveedorControllerController = class ProveedorControllerController {
    constructor(proveedorRepository) {
        this.proveedorRepository = proveedorRepository;
    }
    async create(proveedor) {
        return this.proveedorRepository.create(proveedor);
    }
    async count(where) {
        return this.proveedorRepository.count(where);
    }
    async find(filter) {
        return this.proveedorRepository.find(filter);
    }
    async updateAll(proveedor, where) {
        return this.proveedorRepository.updateAll(proveedor, where);
    }
    async findById(id, filter) {
        return this.proveedorRepository.findById(id, filter);
    }
    async updateById(id, proveedor) {
        await this.proveedorRepository.updateById(id, proveedor);
    }
    async replaceById(id, proveedor) {
        await this.proveedorRepository.replaceById(id, proveedor);
    }
    async deleteById(id) {
        await this.proveedorRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/proveedors', {
        responses: {
            '200': {
                description: 'Proveedor model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Proveedor) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Proveedor, {
                    title: 'NewProveedor',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProveedorControllerController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/proveedors/count', {
        responses: {
            '200': {
                description: 'Proveedor model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Proveedor)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProveedorControllerController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/proveedors', {
        responses: {
            '200': {
                description: 'Array of Proveedor model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.Proveedor, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Proveedor)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProveedorControllerController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/proveedors', {
        responses: {
            '200': {
                description: 'Proveedor PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Proveedor, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Proveedor)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Proveedor, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProveedorControllerController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/proveedors/{id}', {
        responses: {
            '200': {
                description: 'Proveedor model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.Proveedor, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Proveedor, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProveedorControllerController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/proveedors/{id}', {
        responses: {
            '204': {
                description: 'Proveedor PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Proveedor, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Proveedor]),
    tslib_1.__metadata("design:returntype", Promise)
], ProveedorControllerController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/proveedors/{id}', {
        responses: {
            '204': {
                description: 'Proveedor PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Proveedor]),
    tslib_1.__metadata("design:returntype", Promise)
], ProveedorControllerController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/proveedors/{id}', {
        responses: {
            '204': {
                description: 'Proveedor DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], ProveedorControllerController.prototype, "deleteById", null);
ProveedorControllerController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.ProveedorRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ProveedorRepository])
], ProveedorControllerController);
exports.ProveedorControllerController = ProveedorControllerController;
//# sourceMappingURL=proveedor-controller.controller.js.map