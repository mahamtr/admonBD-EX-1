import { Entity } from '@loopback/repository';
export declare class Inventario extends Entity {
    id: number;
    productoId?: number;
    cantidad?: number;
    precio?: number;
    [prop: string]: any;
    constructor(data?: Partial<Inventario>);
}
export interface InventarioRelations {
}
export declare type InventarioWithRelations = Inventario & InventarioRelations;
