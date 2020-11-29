import { Entity } from '@loopback/repository';
export declare class OrdenProveedores extends Entity {
    id: number;
    proveedorId?: number;
    fechaOrden?: string;
    fechaEntrega?: string;
    estado?: boolean;
    cobroAdicional?: number;
    [prop: string]: any;
    constructor(data?: Partial<OrdenProveedores>);
}
export interface OrdenProveedoresRelations {
}
export declare type OrdenProveedoresWithRelations = OrdenProveedores & OrdenProveedoresRelations;
