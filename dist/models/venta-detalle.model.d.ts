import { Entity } from '@loopback/repository';
export declare class VentaDetalle extends Entity {
    id: number;
    ventaId?: number;
    productoId?: number;
    cantidad?: number;
    [prop: string]: any;
    constructor(data?: Partial<VentaDetalle>);
}
export interface VentaDetalleRelations {
}
export declare type VentaDetalleWithRelations = VentaDetalle & VentaDetalleRelations;
