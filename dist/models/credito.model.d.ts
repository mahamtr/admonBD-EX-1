import { Entity } from '@loopback/repository';
export declare class Credito extends Entity {
    id: number;
    clienteId?: number;
    ventaId?: number;
    estado?: boolean;
    [prop: string]: any;
    constructor(data?: Partial<Credito>);
}
export interface CreditoRelations {
}
export declare type CreditoWithRelations = Credito & CreditoRelations;
