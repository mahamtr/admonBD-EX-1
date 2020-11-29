import { DefaultCrudRepository } from '@loopback/repository';
import { VentaDetalle, VentaDetalleRelations } from '../models';
import { MaaimssqlDataSource } from '../datasources';
export declare class VentaDetalleRepository extends DefaultCrudRepository<VentaDetalle, typeof VentaDetalle.prototype.id, VentaDetalleRelations> {
    constructor(dataSource: MaaimssqlDataSource);
}
