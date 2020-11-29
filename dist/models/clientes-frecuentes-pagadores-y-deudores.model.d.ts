import { Entity } from '@loopback/repository';
export declare class ClientesFrecuentesPagadoresYDeudores extends Entity {
    nombre?: string;
    limiteCredito?: number;
    fechadepago?: string;
    ventaId?: number;
    alerta?: string;
    tipoPagador: string;
    [prop: string]: any;
    constructor(data?: Partial<ClientesFrecuentesPagadoresYDeudores>);
}
export interface ClientesFrecuentesPagadoresYDeudoresRelations {
}
export declare type ClientesFrecuentesPagadoresYDeudoresWithRelations = ClientesFrecuentesPagadoresYDeudores & ClientesFrecuentesPagadoresYDeudoresRelations;
