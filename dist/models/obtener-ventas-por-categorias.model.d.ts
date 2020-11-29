import { Entity } from '@loopback/repository';
export declare class ObtenerVentasPorCategorias extends Entity {
    nombre?: string;
    ventas?: number;
    [prop: string]: any;
    constructor(data?: Partial<ObtenerVentasPorCategorias>);
}
export interface ObtenerVentasPorCategoriasRelations {
}
export declare type ObtenerVentasPorCategoriasWithRelations = ObtenerVentasPorCategorias & ObtenerVentasPorCategoriasRelations;
