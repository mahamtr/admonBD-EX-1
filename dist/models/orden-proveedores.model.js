"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdenProveedores = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let OrdenProveedores = class OrdenProveedores extends repository_1.Entity {
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
], OrdenProveedores.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        precision: 10,
        scale: 0,
        mssql: { columnName: 'proveedorId', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'YES' },
    }),
    tslib_1.__metadata("design:type", Number)
], OrdenProveedores.prototype, "proveedorId", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'date',
        mssql: { columnName: 'fechaOrden', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES' },
    }),
    tslib_1.__metadata("design:type", String)
], OrdenProveedores.prototype, "fechaOrden", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'date',
        mssql: { columnName: 'fechaEntrega', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES' },
    }),
    tslib_1.__metadata("design:type", String)
], OrdenProveedores.prototype, "fechaEntrega", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'boolean',
        mssql: { columnName: 'estado', dataType: 'bit', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES' },
    }),
    tslib_1.__metadata("design:type", Boolean)
], OrdenProveedores.prototype, "estado", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        precision: 53,
        mssql: { columnName: 'cobroAdicional', dataType: 'float', dataLength: null, dataPrecision: 53, dataScale: null, nullable: 'YES' },
    }),
    tslib_1.__metadata("design:type", Number)
], OrdenProveedores.prototype, "cobroAdicional", void 0);
OrdenProveedores = tslib_1.__decorate([
    repository_1.model({
        settings: { idInjection: false, mssql: { schema: 'dbo', table: 'ordenProveedores' } }
    }),
    tslib_1.__metadata("design:paramtypes", [Object])
], OrdenProveedores);
exports.OrdenProveedores = OrdenProveedores;
//# sourceMappingURL=orden-proveedores.model.js.map