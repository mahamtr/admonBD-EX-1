import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Proveedor } from '../models';
import { ProveedorRepository } from '../repositories';
export declare class ProveedorControllerController {
    proveedorRepository: ProveedorRepository;
    constructor(proveedorRepository: ProveedorRepository);
    create(proveedor: Omit<Proveedor, 'id'>): Promise<Proveedor>;
    count(where?: Where<Proveedor>): Promise<Count>;
    find(filter?: Filter<Proveedor>): Promise<Proveedor[]>;
    updateAll(proveedor: Proveedor, where?: Where<Proveedor>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Proveedor>): Promise<Proveedor>;
    updateById(id: number, proveedor: Proveedor): Promise<void>;
    replaceById(id: number, proveedor: Proveedor): Promise<void>;
    deleteById(id: number): Promise<void>;
}
