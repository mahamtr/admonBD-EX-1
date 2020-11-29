"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Venta = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Venta = class Venta extends repository_1.Entity {
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
], Venta.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        precision: 10,
        scale: 0,
        mssql: { columnName: 'clienteId', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'YES' },
    }),
    tslib_1.__metadata("design:type", Number)
], Venta.prototype, "clienteId", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'date',
        mssql: { columnName: 'fecha', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES' },
    }),
    tslib_1.__metadata("design:type", String)
], Venta.prototype, "fecha", void 0);
Venta = tslib_1.__decorate([
    repository_1.model({ settings: { idInjection: false, mssql: { schema: 'dbo', table: 'venta' } } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Venta);
exports.Venta = Venta;
//# sourceMappingURL=venta.model.js.map