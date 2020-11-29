"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClienteControllerController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ClienteControllerController = class ClienteControllerController {
    constructor(clienteRepository) {
        this.clienteRepository = clienteRepository;
    }
    async create(cliente) {
        return this.clienteRepository.create(cliente);
    }
    async count(where) {
        return this.clienteRepository.count(where);
    }
    async find(filter) {
        return this.clienteRepository.find(filter);
    }
    async updateAll(cliente, where) {
        return this.clienteRepository.updateAll(cliente, where);
    }
    async findById(id, filter) {
        return this.clienteRepository.findById(id, filter);
    }
    async updateById(id, cliente) {
        await this.clienteRepository.updateById(id, cliente);
    }
    async replaceById(id, cliente) {
        await this.clienteRepository.replaceById(id, cliente);
    }
    async deleteById(id) {
        await this.clienteRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/clientes', {
        responses: {
            '200': {
                description: 'Cliente model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Cliente) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Cliente, {
                    title: 'NewCliente',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ClienteControllerController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/clientes/count', {
        responses: {
            '200': {
                description: 'Cliente model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Cliente)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ClienteControllerController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/clientes', {
        responses: {
            '200': {
                description: 'Array of Cliente model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.Cliente, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Cliente)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ClienteControllerController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/clientes', {
        responses: {
            '200': {
                description: 'Cliente PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Cliente, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Cliente)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Cliente, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ClienteControllerController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/clientes/{id}', {
        responses: {
            '200': {
                description: 'Cliente model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.Cliente, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Cliente, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ClienteControllerController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/clientes/{id}', {
        responses: {
            '204': {
                description: 'Cliente PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Cliente, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Cliente]),
    tslib_1.__metadata("design:returntype", Promise)
], ClienteControllerController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/clientes/{id}', {
        responses: {
            '204': {
                description: 'Cliente PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Cliente]),
    tslib_1.__metadata("design:returntype", Promise)
], ClienteControllerController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/clientes/{id}', {
        responses: {
            '204': {
                description: 'Cliente DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], ClienteControllerController.prototype, "deleteById", null);
ClienteControllerController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.ClienteRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ClienteRepository])
], ClienteControllerController);
exports.ClienteControllerController = ClienteControllerController;
//# sourceMappingURL=cliente-controller.controller.js.map