"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObtenerGastosCuentaPersonal = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let ObtenerGastosCuentaPersonal = class ObtenerGastosCuentaPersonal extends repository_1.Entity {
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
], ObtenerGastosCuentaPersonal.prototype, "nombre", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        precision: 10,
        scale: 0,
        mssql: { columnName: 'cantidad', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'YES' },
    }),
    tslib_1.__metadata("design:type", Number)
], ObtenerGastosCuentaPersonal.prototype, "cantidad", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        precision: 53,
        mssql: { columnName: 'monto', dataType: 'float', dataLength: null, dataPrecision: 53, dataScale: null, nullable: 'YES' },
    }),
    tslib_1.__metadata("design:type", Number)
], ObtenerGastosCuentaPersonal.prototype, "monto", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'date',
        mssql: { columnName: 'fecha', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES' },
    }),
    tslib_1.__metadata("design:type", String)
], ObtenerGastosCuentaPersonal.prototype, "fecha", void 0);
ObtenerGastosCuentaPersonal = tslib_1.__decorate([
    repository_1.model({
        settings: {
            idInjection: false,
            mssql: { schema: 'dbo', table: 'obtenerGastosCuentaPersonal' }
        }
    }),
    tslib_1.__metadata("design:paramtypes", [Object])
], ObtenerGastosCuentaPersonal);
exports.ObtenerGastosCuentaPersonal = ObtenerGastosCuentaPersonal;
//# sourceMappingURL=obtener-gastos-cuenta-personal.model.js.map