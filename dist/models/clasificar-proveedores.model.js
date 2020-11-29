"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClasificarProveedores = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let ClasificarProveedores = class ClasificarProveedores extends repository_1.Model {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], ClasificarProveedores.prototype, "nombre", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
    }),
    tslib_1.__metadata("design:type", Number)
], ClasificarProveedores.prototype, "ordenes", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], ClasificarProveedores.prototype, "ventas", void 0);
ClasificarProveedores = tslib_1.__decorate([
    repository_1.model(),
    tslib_1.__metadata("design:paramtypes", [Object])
], ClasificarProveedores);
exports.ClasificarProveedores = ClasificarProveedores;
//# sourceMappingURL=clasificar-proveedores.model.js.map