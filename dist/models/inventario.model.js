"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inventario = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Inventario = class Inventario extends repository_1.Entity {
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
], Inventario.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        precision: 10,
        scale: 0,
        mssql: { columnName: 'productoId', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'YES' },
    }),
    tslib_1.__metadata("design:type", Number)
], Inventario.prototype, "productoId", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        precision: 10,
        scale: 0,
        mssql: { columnName: 'cantidad', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'YES' },
    }),
    tslib_1.__metadata("design:type", Number)
], Inventario.prototype, "cantidad", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        precision: 53,
        mssql: { columnName: 'precio', dataType: 'float', dataLength: null, dataPrecision: 53, dataScale: null, nullable: 'YES' },
    }),
    tslib_1.__metadata("design:type", Number)
], Inventario.prototype, "precio", void 0);
Inventario = tslib_1.__decorate([
    repository_1.model({ settings: { idInjection: false, mssql: { schema: 'dbo', table: 'inventario' } } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Inventario);
exports.Inventario = Inventario;
//# sourceMappingURL=inventario.model.js.map