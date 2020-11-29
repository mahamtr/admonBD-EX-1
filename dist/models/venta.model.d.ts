import { Entity } from '@loopback/repository';
export declare class Venta extends Entity {
    id: number;
    clienteId?: number;
    fecha?: string;
    [prop: string]: any;
    constructor(data?: Partial<Venta>);
}
export interface VentaRelations {
}
export declare type VentaWithRelations = Venta & VentaRelations;
