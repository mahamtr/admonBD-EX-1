"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransaccionesPorDia = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let TransaccionesPorDia = class TransaccionesPorDia extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
        length: 14,
        mssql: { columnName: 'TRANSACCION', dataType: 'varchar', dataLength: 14, dataPrecision: null, dataScale: null, nullable: 'NO' },
    }),
    tslib_1.__metadata("design:type", String)
], TransaccionesPorDia.prototype, "transaccion", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        required: true,
        precision: 10,
        scale: 0,
        mssql: { columnName: 'id', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO' },
    }),
    tslib_1.__metadata("design:type", Number)
], TransaccionesPorDia.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        length: 255,
        mssql: { columnName: 'nombre', dataType: 'varchar', dataLength: 255, dataPrecision: null, dataScale: null, nullable: 'YES' },
    }),
    tslib_1.__metadata("design:type", String)
], TransaccionesPorDia.prototype, "nombre", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'date',
        mssql: { columnName: 'fecha', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES' },
    }),
    tslib_1.__metadata("design:type", String)
], TransaccionesPorDia.prototype, "fecha", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        length: 255,
        mssql: { columnName: 'producto', dataType: 'varchar', dataLength: 255, dataPrecision: null, dataScale: null, nullable: 'YES' },
    }),
    tslib_1.__metadata("design:type", String)
], TransaccionesPorDia.prototype, "producto", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        precision: 53,
        mssql: { columnName: 'precio', dataType: 'float', dataLength: null, dataPrecision: 53, dataScale: null, nullable: 'YES' },
    }),
    tslib_1.__metadata("design:type", Number)
], TransaccionesPorDia.prototype, "precio", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        precision: 10,
        scale: 0,
        mssql: { columnName: 'cantidad', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'YES' },
    }),
    tslib_1.__metadata("design:type", Number)
], TransaccionesPorDia.prototype, "cantidad", void 0);
TransaccionesPorDia = tslib_1.__decorate([
    repository_1.model({
        settings: { idInjection: false, mssql: { schema: 'dbo', table: 'transaccionesPorDia' } }
    }),
    tslib_1.__metadata("design:paramtypes", [Object])
], TransaccionesPorDia);
exports.TransaccionesPorDia = TransaccionesPorDia;
//# sourceMappingURL=transacciones-por-dia.model.js.map