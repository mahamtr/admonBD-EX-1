"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Producto = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Producto = class Producto extends repository_1.Entity {
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
], Producto.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        length: 255,
        mssql: { columnName: 'nombre', dataType: 'varchar', dataLength: 255, dataPrecision: null, dataScale: null, nullable: 'YES' },
    }),
    tslib_1.__metadata("design:type", String)
], Producto.prototype, "nombre", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        precision: 10,
        scale: 0,
        mssql: { columnName: 'categoriaId', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'YES' },
    }),
    tslib_1.__metadata("design:type", Number)
], Producto.prototype, "categoriaId", void 0);
Producto = tslib_1.__decorate([
    repository_1.model({ settings: { idInjection: false, mssql: { schema: 'dbo', table: 'producto' } } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Producto);
exports.Producto = Producto;
//# sourceMappingURL=producto.model.js.map