import { Entity } from '@loopback/repository';
export declare class TransaccionesPorDia extends Entity {
    transaccion: string;
    id: number;
    nombre?: string;
    fecha?: string;
    producto?: string;
    precio?: number;
    cantidad?: number;
    [prop: string]: any;
    constructor(data?: Partial<TransaccionesPorDia>);
}
export interface TransaccionesPorDiaRelations {
}
export declare type TransaccionesPorDiaWithRelations = TransaccionesPorDia & TransaccionesPorDiaRelations;
