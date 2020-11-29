import { Entity } from '@loopback/repository';
export declare class OrdenProductos extends Entity {
    id: number;
    ordenId?: number;
    productoId?: number;
    cantidad?: number;
    costo?: number;
    precioSugerido?: number;
    [prop: string]: any;
    constructor(data?: Partial<OrdenProductos>);
}
export interface OrdenProductosRelations {
}
export declare type OrdenProductosWithRelations = OrdenProductos & OrdenProductosRelations;
