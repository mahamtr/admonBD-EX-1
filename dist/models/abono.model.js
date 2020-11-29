"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Abono = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Abono = class Abono extends repository_1.Entity {
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
], Abono.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'date',
        mssql: { columnName: 'fecha', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES' },
    }),
    tslib_1.__metadata("design:type", String)
], Abono.prototype, "fecha", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        precision: 10,
        scale: 0,
        mssql: { columnName: 'creditoId', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'YES' },
    }),
    tslib_1.__metadata("design:type", Number)
], Abono.prototype, "creditoId", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        precision: 53,
        mssql: { columnName: 'monto', dataType: 'float', dataLength: null, dataPrecision: 53, dataScale: null, nullable: 'YES' },
    }),
    tslib_1.__metadata("design:type", Number)
], Abono.prototype, "monto", void 0);
Abono = tslib_1.__decorate([
    repository_1.model({ settings: { idInjection: false, mssql: { schema: 'dbo', table: 'abono' } } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Abono);
exports.Abono = Abono;
//# sourceMappingURL=abono.model.js.map