import { DefaultCrudRepository } from '@loopback/repository';
import { Venta, VentaRelations } from '../models';
import { MaaimssqlDataSource } from '../datasources';
export declare class VentaRepository extends DefaultCrudRepository<Venta, typeof Venta.prototype.id, VentaRelations> {
    constructor(dataSource: MaaimssqlDataSource);
}
