import { DefaultCrudRepository } from '@loopback/repository';
import { OrdenProductos, OrdenProductosRelations } from '../models';
import { MaaimssqlDataSource } from '../datasources';
export declare class OrdenProductosRepository extends DefaultCrudRepository<OrdenProductos, typeof OrdenProductos.prototype.id, OrdenProductosRelations> {
    constructor(dataSource: MaaimssqlDataSource);
}
