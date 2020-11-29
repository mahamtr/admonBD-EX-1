import { Entity } from '@loopback/repository';
export declare class ObtenerProductosConPrecio30 extends Entity {
    nombre?: string;
    costo?: number;
    precio?: number;
    precioPorcentaje30?: number;
    [prop: string]: any;
    constructor(data?: Partial<ObtenerProductosConPrecio30>);
}
export interface ObtenerProductosConPrecio30Relations {
}
export declare type ObtenerProductosConPrecio30WithRelations = ObtenerProductosConPrecio30 & ObtenerProductosConPrecio30Relations;
