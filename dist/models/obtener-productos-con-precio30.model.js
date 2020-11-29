"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObtenerProductosConPrecio30 = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let ObtenerProductosConPrecio30 = class ObtenerProductosConPrecio30 extends repository_1.Entity {
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
], ObtenerProductosConPrecio30.prototype, "nombre", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        precision: 53,
        mssql: { columnName: 'costo', dataType: 'float', dataLength: null, dataPrecision: 53, dataScale: null, nullable: 'YES' },
    }),
    tslib_1.__metadata("design:type", Number)
], ObtenerProductosConPrecio30.prototype, "costo", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        precision: 53,
        mssql: { columnName: 'precio', dataType: 'float', dataLength: null, dataPrecision: 53, dataScale: null, nullable: 'YES' },
    }),
    tslib_1.__metadata("design:type", Number)
], ObtenerProductosConPrecio30.prototype, "precio", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        precision: 53,
        mssql: { columnName: 'precioPORCENTAJE30', dataType: 'float', dataLength: null, dataPrecision: 53, dataScale: null, nullable: 'YES' },
    }),
    tslib_1.__metadata("design:type", Number)
], ObtenerProductosConPrecio30.prototype, "precioPorcentaje30", void 0);
ObtenerProductosConPrecio30 = tslib_1.__decorate([
    repository_1.model({
        settings: {
            idInjection: false,
            mssql: { schema: 'dbo', table: 'obtenerProductosConPrecio30' }
        }
    }),
    tslib_1.__metadata("design:paramtypes", [Object])
], ObtenerProductosConPrecio30);
exports.ObtenerProductosConPrecio30 = ObtenerProductosConPrecio30;
//# sourceMappingURL=obtener-productos-con-precio30.model.js.map