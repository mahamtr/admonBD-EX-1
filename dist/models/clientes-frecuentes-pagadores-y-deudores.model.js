"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientesFrecuentesPagadoresYDeudores = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let ClientesFrecuentesPagadoresYDeudores = class ClientesFrecuentesPagadoresYDeudores extends repository_1.Entity {
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
], ClientesFrecuentesPagadoresYDeudores.prototype, "nombre", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        precision: 53,
        mssql: { columnName: 'limiteCredito', dataType: 'float', dataLength: null, dataPrecision: 53, dataScale: null, nullable: 'YES' },
    }),
    tslib_1.__metadata("design:type", Number)
], ClientesFrecuentesPagadoresYDeudores.prototype, "limiteCredito", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'date',
        mssql: { columnName: 'FECHADEPAGO', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES' },
    }),
    tslib_1.__metadata("design:type", String)
], ClientesFrecuentesPagadoresYDeudores.prototype, "fechadepago", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        precision: 10,
        scale: 0,
        mssql: { columnName: 'ventaId', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'YES' },
    }),
    tslib_1.__metadata("design:type", Number)
], ClientesFrecuentesPagadoresYDeudores.prototype, "ventaId", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        length: 18,
        mssql: { columnName: 'ALERTA', dataType: 'varchar', dataLength: 18, dataPrecision: null, dataScale: null, nullable: 'YES' },
    }),
    tslib_1.__metadata("design:type", String)
], ClientesFrecuentesPagadoresYDeudores.prototype, "alerta", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
        length: 17,
        mssql: { columnName: 'TIPO_PAGADOR', dataType: 'varchar', dataLength: 17, dataPrecision: null, dataScale: null, nullable: 'NO' },
    }),
    tslib_1.__metadata("design:type", String)
], ClientesFrecuentesPagadoresYDeudores.prototype, "tipoPagador", void 0);
ClientesFrecuentesPagadoresYDeudores = tslib_1.__decorate([
    repository_1.model({
        settings: {
            idInjection: false,
            mssql: { schema: 'dbo', table: 'clientesFrecuentesPagadoresYDeudores' }
        }
    }),
    tslib_1.__metadata("design:paramtypes", [Object])
], ClientesFrecuentesPagadoresYDeudores);
exports.ClientesFrecuentesPagadoresYDeudores = ClientesFrecuentesPagadoresYDeudores;
//# sourceMappingURL=clientes-frecuentes-pagadores-y-deudores.model.js.map