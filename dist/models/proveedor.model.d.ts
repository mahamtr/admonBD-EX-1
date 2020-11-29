import { Entity } from '@loopback/repository';
export declare class Proveedor extends Entity {
    id: number;
    nombre?: string;
    observacion?: string;
    [prop: string]: any;
    constructor(data?: Partial<Proveedor>);
}
export interface ProveedorRelations {
}
export declare type ProveedorWithRelations = Proveedor & ProveedorRelations;
