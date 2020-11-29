"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObtenerProductosConPrecioDefinidoPorProveedor = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let ObtenerProductosConPrecioDefinidoPorProveedor = class ObtenerProductosConPrecioDefinidoPorProveedor extends repository_1.Entity {
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
], ObtenerProductosConPrecioDefinidoPorProveedor.prototype, "nombre", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        precision: 53,
        mssql: { columnName: 'costo', dataType: 'float', dataLength: null, dataPrecision: 53, dataScale: null, nullable: 'YES' },
    }),
    tslib_1.__metadata("design:type", Number)
], ObtenerProductosConPrecioDefinidoPorProveedor.prototype, "costo", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        precision: 53,
        mssql: { columnName: 'precio', dataType: 'float', dataLength: null, dataPrecision: 53, dataScale: null, nullable: 'YES' },
    }),
    tslib_1.__metadata("design:type", Number)
], ObtenerProductosConPrecioDefinidoPorProveedor.prototype, "precio", void 0);
ObtenerProductosConPrecioDefinidoPorProveedor = tslib_1.__decorate([
    repository_1.model({
        settings: {
            idInjection: false,
            mssql: { schema: 'dbo', table: 'obtenerProductosConPrecioDefinidoPorProveedor' }
        }
    }),
    tslib_1.__metadata("design:paramtypes", [Object])
], ObtenerProductosConPrecioDefinidoPorProveedor);
exports.ObtenerProductosConPrecioDefinidoPorProveedor = ObtenerProductosConPrecioDefinidoPorProveedor;
//# sourceMappingURL=obtener-productos-con-precio-definido-por-proveedor.model.js.map