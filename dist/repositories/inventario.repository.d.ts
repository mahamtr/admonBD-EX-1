import { DefaultCrudRepository } from '@loopback/repository';
import { Inventario, InventarioRelations } from '../models';
import { MaaimssqlDataSource } from '../datasources';
export declare class InventarioRepository extends DefaultCrudRepository<Inventario, typeof Inventario.prototype.id, InventarioRelations> {
    constructor(dataSource: MaaimssqlDataSource);
}
