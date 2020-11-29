import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { OrdenProveedores } from '../models';
import { OrdenProveedoresRepository } from '../repositories';
export declare class OrdenProveedoresControllerController {
    ordenProveedoresRepository: OrdenProveedoresRepository;
    constructor(ordenProveedoresRepository: OrdenProveedoresRepository);
    create(ordenProveedores: Omit<OrdenProveedores, 'id'>): Promise<OrdenProveedores>;
    count(where?: Where<OrdenProveedores>): Promise<Count>;
    find(filter?: Filter<OrdenProveedores>): Promise<OrdenProveedores[]>;
    updateAll(ordenProveedores: OrdenProveedores, where?: Where<OrdenProveedores>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<OrdenProveedores>): Promise<OrdenProveedores>;
    updateById(id: number, ordenProveedores: OrdenProveedores): Promise<void>;
    replaceById(id: number, ordenProveedores: OrdenProveedores): Promise<void>;
    deleteById(id: number): Promise<void>;
}
