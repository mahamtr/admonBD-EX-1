"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VentaDetalle = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let VentaDetalle = class VentaDetalle extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
        precision: 10,
        scale: 0,
        id: 1,
        mssql: { columnName: 'id', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO' },
    }),
    tslib_1.__metadata("design:type", Number)
], VentaDetalle.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        precision: 10,
        scale: 0,
        mssql: { columnName: 'ventaId', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'YES' },
    }),
    tslib_1.__metadata("design:type", Number)
], VentaDetalle.prototype, "ventaId", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        precision: 10,
        scale: 0,
        mssql: { columnName: 'productoId', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'YES' },
    }),
    tslib_1.__metadata("design:type", Number)
], VentaDetalle.prototype, "productoId", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        precision: 10,
        scale: 0,
        mssql: { columnName: 'cantidad', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'YES' },
    }),
    tslib_1.__metadata("design:type", Number)
], VentaDetalle.prototype, "cantidad", void 0);
VentaDetalle = tslib_1.__decorate([
    repository_1.model({ settings: { idInjection: false, mssql: { schema: 'dbo', table: 'ventaDetalle' } } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], VentaDetalle);
exports.VentaDetalle = VentaDetalle;
//# sourceMappingURL=venta-detalle.model.js.map