import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { VentaDetalle } from '../models';
import { VentaDetalleRepository } from '../repositories';
export declare class VentaDetalleControllerController {
    ventaDetalleRepository: VentaDetalleRepository;
    constructor(ventaDetalleRepository: VentaDetalleRepository);
    create(ventaDetalle: Omit<VentaDetalle, 'id'>): Promise<VentaDetalle>;
    count(where?: Where<VentaDetalle>): Promise<Count>;
    find(filter?: Filter<VentaDetalle>): Promise<VentaDetalle[]>;
    updateAll(ventaDetalle: VentaDetalle, where?: Where<VentaDetalle>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<VentaDetalle>): Promise<VentaDetalle>;
    updateById(id: number, ventaDetalle: VentaDetalle): Promise<void>;
    replaceById(id: number, ventaDetalle: VentaDetalle): Promise<void>;
    deleteById(id: number): Promise<void>;
}
