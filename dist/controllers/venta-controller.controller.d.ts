import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Venta } from '../models';
import { VentaRepository } from '../repositories';
export declare class VentaControllerController {
    ventaRepository: VentaRepository;
    constructor(ventaRepository: VentaRepository);
    create(venta: Omit<Venta, 'id'>): Promise<Venta>;
    count(where?: Where<Venta>): Promise<Count>;
    find(filter?: Filter<Venta>): Promise<Venta[]>;
    updateAll(venta: Venta, where?: Where<Venta>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Venta>): Promise<Venta>;
    updateById(id: number, venta: Venta): Promise<void>;
    replaceById(id: number, venta: Venta): Promise<void>;
    deleteById(id: number): Promise<void>;
}
