import { Model } from '@loopback/repository';
export declare class ClasificarProveedores extends Model {
    nombre?: string;
    ordenes?: number;
    ventas?: string;
    constructor(data?: Partial<ClasificarProveedores>);
}
export interface ClasificarProveedoresRelations {
}
export declare type ClasificarProveedoresWithRelations = ClasificarProveedores & ClasificarProveedoresRelations;
