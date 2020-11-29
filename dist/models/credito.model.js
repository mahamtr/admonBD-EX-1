"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Credito = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Credito = class Credito extends repository_1.Entity {
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
], Credito.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        precision: 10,
        scale: 0,
        mssql: { columnName: 'clienteId', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'YES' },
    }),
    tslib_1.__metadata("design:type", Number)
], Credito.prototype, "clienteId", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        precision: 10,
        scale: 0,
        mssql: { columnName: 'ventaId', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'YES' },
    }),
    tslib_1.__metadata("design:type", Number)
], Credito.prototype, "ventaId", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'boolean',
        mssql: { columnName: 'estado', dataType: 'bit', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES' },
    }),
    tslib_1.__metadata("design:type", Boolean)
], Credito.prototype, "estado", void 0);
Credito = tslib_1.__decorate([
    repository_1.model({ settings: { idInjection: false, mssql: { schema: 'dbo', table: 'credito' } } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Credito);
exports.Credito = Credito;
//# sourceMappingURL=credito.model.js.map