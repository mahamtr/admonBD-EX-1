"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Cliente = class Cliente extends repository_1.Entity {
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
], Cliente.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        length: 255,
        mssql: { columnName: 'nombre', dataType: 'varchar', dataLength: 255, dataPrecision: null, dataScale: null, nullable: 'YES' },
    }),
    tslib_1.__metadata("design:type", String)
], Cliente.prototype, "nombre", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        precision: 53,
        mssql: { columnName: 'limiteCredito', dataType: 'float', dataLength: null, dataPrecision: 53, dataScale: null, nullable: 'YES' },
    }),
    tslib_1.__metadata("design:type", Number)
], Cliente.prototype, "limiteCredito", void 0);
Cliente = tslib_1.__decorate([
    repository_1.model({ settings: { idInjection: false, mssql: { schema: 'dbo', table: 'cliente' } } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Cliente);
exports.Cliente = Cliente;
//# sourceMappingURL=cliente.model.js.map