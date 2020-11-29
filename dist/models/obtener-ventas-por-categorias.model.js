"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObtenerVentasPorCategorias = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let ObtenerVentasPorCategorias = class ObtenerVentasPorCategorias extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        length: 255,
        mssql: { columnName: 'nombre', dataType: 'varchar', dataLength: 255, dataPrecision: null, dataScale: null, nullable: 'YES' },
    }),
    tslib_1.__metadata("design:type", String)
], ObtenerVentasPorCategorias.prototype, "nombre", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        precision: 10,
        scale: 0,
        mssql: { columnName: 'ventas', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'YES' },
    }),
    tslib_1.__metadata("design:type", Number)
], ObtenerVentasPorCategorias.prototype, "ventas", void 0);
ObtenerVentasPorCategorias = tslib_1.__decorate([
    repository_1.model({
        settings: {
            idInjection: false,
            mssql: { schema: 'dbo', table: 'obtenerVentasPorCategorias' }
        }
    }),
    tslib_1.__metadata("design:paramtypes", [Object])
], ObtenerVentasPorCategorias);
exports.ObtenerVentasPorCategorias = ObtenerVentasPorCategorias;
//# sourceMappingURL=obtener-ventas-por-categorias.model.js.map