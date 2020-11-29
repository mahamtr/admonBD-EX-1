"use strict";
// Uncomment these imports to begin using these cool features!
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewsControllerController = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const rest_1 = require("@loopback/rest");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
const clientes_frecuentes_pagadores_y_deudores_model_1 = require("../models/clientes-frecuentes-pagadores-y-deudores.model");
const obtener_gastos_cuenta_personal_model_1 = require("../models/obtener-gastos-cuenta-personal.model");
const obtener_productos_con_precio_definido_por_proveedor_model_1 = require("../models/obtener-productos-con-precio-definido-por-proveedor.model");
const obtener_productos_con_precio30_model_1 = require("../models/obtener-productos-con-precio30.model");
const obtener_ventas_por_categorias_model_1 = require("../models/obtener-ventas-por-categorias.model");
// import {inject} from '@loopback/core';
let ViewsControllerController = class ViewsControllerController {
    constructor(dataSource) {
        this.dataSource = dataSource;
    }
    async transaccionesPorDia() {
        return await this.dataSource.execute('select * from transaccionesPorDia');
    }
    async clientesFrecuentesPagadoresYDeudores() {
        return await this.dataSource.execute('select * from clientesFrecuentesPagadoresYDeudores');
    }
    async obtenerGastosCuentaPersonal() {
        return await this.dataSource.execute('select * from obtenerGastosCuentaPersonal');
    }
    async obtenerProductosConPrecio30() {
        return await this.dataSource.execute('select * from obtenerProductosConPrecio30');
    }
    async obtenerProductosConPrecioDefinidoPorProveedor() {
        return await this.dataSource.execute('select * from obtenerProductosConPrecioDefinidoPorProveedor');
    }
    async obtenerVentasPorCategorias() {
        return await this.dataSource.execute('select * from obtenerVentasPorCategorias');
    }
    async ClasificarProveedoresStoreProcedure(fechaInicial, fechaFinal) {
        return await this.dataSource.execute(`exec clasificarProveedores @fechaInicio = '${fechaInicial}',		@fechaFinal = '${fechaFinal}'`);
    }
};
tslib_1.__decorate([
    rest_1.get('/view/VentaControllerController', {
        responses: {
            '200': {
                description: 'TransaccionesPorDia model count',
                content: { 'application/json': { schema: models_1.TransaccionesPorDia } },
            },
        },
    }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], ViewsControllerController.prototype, "transaccionesPorDia", null);
tslib_1.__decorate([
    rest_1.get('/view/ClientesFrecuentesPagadoresYDeudores', {
        responses: {
            '200': {
                description: 'ClientesFrecuentesPagadoresYDeudores model count',
                content: { 'application/json': { schema: clientes_frecuentes_pagadores_y_deudores_model_1.ClientesFrecuentesPagadoresYDeudores } },
            },
        },
    }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], ViewsControllerController.prototype, "clientesFrecuentesPagadoresYDeudores", null);
tslib_1.__decorate([
    rest_1.get('/view/ObtenerGastosCuentaPersonal', {
        responses: {
            '200': {
                description: 'ObtenerGastosCuentaPersonal model count',
                content: { 'application/json': { schema: obtener_gastos_cuenta_personal_model_1.ObtenerGastosCuentaPersonal } },
            },
        },
    }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], ViewsControllerController.prototype, "obtenerGastosCuentaPersonal", null);
tslib_1.__decorate([
    rest_1.get('/view/ObtenerProductosConPrecio30', {
        responses: {
            '200': {
                description: 'ObtenerProductosConPrecio30 model count',
                content: { 'application/json': { schema: obtener_productos_con_precio30_model_1.ObtenerProductosConPrecio30 } },
            },
        },
    }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], ViewsControllerController.prototype, "obtenerProductosConPrecio30", null);
tslib_1.__decorate([
    rest_1.get('/view/ObtenerProductosConPrecioDefinidoPorProveedor', {
        responses: {
            '200': {
                description: 'ObtenerProductosConPrecioDefinidoPorProveedor model count',
                content: { 'application/json': { schema: obtener_productos_con_precio_definido_por_proveedor_model_1.ObtenerProductosConPrecioDefinidoPorProveedor } },
            },
        },
    }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], ViewsControllerController.prototype, "obtenerProductosConPrecioDefinidoPorProveedor", null);
tslib_1.__decorate([
    rest_1.get('/view/ObtenerVentasPorCategorias', {
        responses: {
            '200': {
                description: 'ObtenerVentasPorCategorias model count',
                content: { 'application/json': { schema: obtener_ventas_por_categorias_model_1.ObtenerVentasPorCategorias } },
            },
        },
    }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], ViewsControllerController.prototype, "obtenerVentasPorCategorias", null);
tslib_1.__decorate([
    rest_1.get('/view/ClasificarProveedoresStoredProcedured/{fechaInicial}/{fechaFinal}', {
        responses: {
            '200': {
                description: 'ObtenerVentasPorCategorias model count',
                content: { 'application/json': { schema: obtener_ventas_por_categorias_model_1.ObtenerVentasPorCategorias } },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('fechaInicial')),
    tslib_1.__param(1, rest_1.param.path.string('fechaFinal')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, String]),
    tslib_1.__metadata("design:returntype", Promise)
], ViewsControllerController.prototype, "ClasificarProveedoresStoreProcedure", null);
ViewsControllerController = tslib_1.__decorate([
    tslib_1.__param(0, core_1.inject('datasources.maaimssql')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.MaaimssqlDataSource])
], ViewsControllerController);
exports.ViewsControllerController = ViewsControllerController;
//# sourceMappingURL=views-controller.controller.js.map