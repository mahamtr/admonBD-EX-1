"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbonoContolerController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let AbonoContolerController = class AbonoContolerController {
    constructor(abonoRepository) {
        this.abonoRepository = abonoRepository;
    }
    async create(abono) {
        return this.abonoRepository.create(abono);
    }
    async count(where) {
        return this.abonoRepository.count(where);
    }
    async find(filter) {
        return this.abonoRepository.find(filter);
    }
    async updateAll(abono, where) {
        return this.abonoRepository.updateAll(abono, where);
    }
    async findById(id, filter) {
        return this.abonoRepository.findById(id, filter);
    }
    async updateById(id, abono) {
        await this.abonoRepository.updateById(id, abono);
    }
    async replaceById(id, abono) {
        await this.abonoRepository.replaceById(id, abono);
    }
    async deleteById(id) {
        await this.abonoRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    rest_1.post('/abonos', {
        responses: {
            '200': {
                description: 'Abono model instance',
                content: { 'application/json': { schema: rest_1.getModelSchemaRef(models_1.Abono) } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Abono, {
                    title: 'NewAbono',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AbonoContolerController.prototype, "create", null);
tslib_1.__decorate([
    rest_1.get('/abonos/count', {
        responses: {
            '200': {
                description: 'Abono model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Abono)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AbonoContolerController.prototype, "count", null);
tslib_1.__decorate([
    rest_1.get('/abonos', {
        responses: {
            '200': {
                description: 'Array of Abono model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.Abono, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Abono)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AbonoContolerController.prototype, "find", null);
tslib_1.__decorate([
    rest_1.patch('/abonos', {
        responses: {
            '200': {
                description: 'Abono PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Abono, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Abono)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Abono, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AbonoContolerController.prototype, "updateAll", null);
tslib_1.__decorate([
    rest_1.get('/abonos/{id}', {
        responses: {
            '200': {
                description: 'Abono model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.Abono, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Abono, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AbonoContolerController.prototype, "findById", null);
tslib_1.__decorate([
    rest_1.patch('/abonos/{id}', {
        responses: {
            '204': {
                description: 'Abono PATCH success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Abono, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Abono]),
    tslib_1.__metadata("design:returntype", Promise)
], AbonoContolerController.prototype, "updateById", null);
tslib_1.__decorate([
    rest_1.put('/abonos/{id}', {
        responses: {
            '204': {
                description: 'Abono PUT success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.requestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Abono]),
    tslib_1.__metadata("design:returntype", Promise)
], AbonoContolerController.prototype, "replaceById", null);
tslib_1.__decorate([
    rest_1.del('/abonos/{id}', {
        responses: {
            '204': {
                description: 'Abono DELETE success',
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], AbonoContolerController.prototype, "deleteById", null);
AbonoContolerController = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.AbonoRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.AbonoRepository])
], AbonoContolerController);
exports.AbonoContolerController = AbonoContolerController;
//# sourceMappingURL=abono-contoler.controller.js.map