import { Entity } from '@loopback/repository';
export declare class Abono extends Entity {
    id: number;
    fecha?: string;
    creditoId?: number;
    monto?: number;
    [prop: string]: any;
    constructor(data?: Partial<Abono>);
}
export interface AbonoRelations {
}
export declare type AbonoWithRelations = Abono & AbonoRelations;
