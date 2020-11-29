"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreditoControllerController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let CreditoControllerController = class CreditoControllerController {
    constructor(creditoRepository) {
        this.creditoRepository = creditoRepository;
    }
    async create(credito) {
        return this.creditoRepository.create(credito);
    }
    async count(where) {
        return this.creditoRepository.count(where);
    }
    async find(filter) {
        return this.creditoRepository.find(filter);
    }
    async updateAll(credito, where) {
        return this.creditoRepository.updateAll(credito, where);
    }
    async findById(id, filter) {
        return this.creditoRepository.findById(id, filter);
    }
    async updateById(id, credito) {
        await this.creditoRepository.updateById(id, credito);
    }
    async replaceById(id, credito) {
        await this.creditoRepository.replaceById(id, credito);
    }
    async deleteById(id) {
        await this.creditoRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/creditos', {
        responses: {
            '200': {
                description: 'Credito model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Credito) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Credito, {
                    title: 'NewCredito',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CreditoControllerController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/creditos/count', {
        responses: {
            '200': {
                description: 'Credito model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Credito)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CreditoControllerController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/creditos', {
        responses: {
            '200': {
                description: 'Array of Credito model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.Credito, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Credito)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CreditoControllerController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/creditos', {
        responses: {
            '200': {
                description: 'Credito PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Credito, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Credito)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Credito, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CreditoControllerController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/creditos/{id}', {
        responses: {
            '200': {
                description: 'Credito model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.Credito, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Credito, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CreditoControllerController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/creditos/{id}', {
        responses: {
            '204': {
                description: 'Credito PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Credito, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Credito]),
    tslib_1.__metadata("design:returntype", Promise)
], CreditoControllerController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/creditos/{id}', {
        responses: {
            '204': {
                description: 'Credito PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Credito]),
    tslib_1.__metadata("design:returntype", Promise)
], CreditoControllerController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/creditos/{id}', {
        responses: {
            '204': {
                description: 'Credito DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], CreditoControllerController.prototype, "deleteById", null);
CreditoControllerController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.CreditoRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.CreditoRepository])
], CreditoControllerController);
exports.CreditoControllerController = CreditoControllerController;
//# sourceMappingURL=credito-controller.controller.js.map