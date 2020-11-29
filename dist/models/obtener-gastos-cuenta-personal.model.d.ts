import { Entity } from '@loopback/repository';
export declare class ObtenerGastosCuentaPersonal extends Entity {
    nombre?: string;
    cantidad?: number;
    monto?: number;
    fecha?: string;
    [prop: string]: any;
    constructor(data?: Partial<ObtenerGastosCuentaPersonal>);
}
export interface ObtenerGastosCuentaPersonalRelations {
}
export declare type ObtenerGastosCuentaPersonalWithRelations = ObtenerGastosCuentaPersonal & ObtenerGastosCuentaPersonalRelations;
