import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { OrdenProductos } from '../models';
import { OrdenProductosRepository } from '../repositories';
export declare class OrdenProductosControllerController {
    ordenProductosRepository: OrdenProductosRepository;
    constructor(ordenProductosRepository: OrdenProductosRepository);
    create(ordenProductos: Omit<OrdenProductos, 'id'>): Promise<OrdenProductos>;
    count(where?: Where<OrdenProductos>): Promise<Count>;
    find(filter?: Filter<OrdenProductos>): Promise<OrdenProductos[]>;
    updateAll(ordenProductos: OrdenProductos, where?: Where<OrdenProductos>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<OrdenProductos>): Promise<OrdenProductos>;
    updateById(id: number, ordenProductos: OrdenProductos): Promise<void>;
    replaceById(id: number, ordenProductos: OrdenProductos): Promise<void>;
    deleteById(id: number): Promise<void>;
}
