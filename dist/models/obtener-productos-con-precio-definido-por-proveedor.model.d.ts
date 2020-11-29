import { Entity } from '@loopback/repository';
export declare class ObtenerProductosConPrecioDefinidoPorProveedor extends Entity {
    nombre?: string;
    costo?: number;
    precio?: number;
    [prop: string]: any;
    constructor(data?: Partial<ObtenerProductosConPrecioDefinidoPorProveedor>);
}
export interface ObtenerProductosConPrecioDefinidoPorProveedorRelations {
}
export declare type ObtenerProductosConPrecioDefinidoPorProveedorWithRelations = ObtenerProductosConPrecioDefinidoPorProveedor & ObtenerProductosConPrecioDefinidoPorProveedorRelations;
