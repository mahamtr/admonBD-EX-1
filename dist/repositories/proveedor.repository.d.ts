import { DefaultCrudRepository } from '@loopback/repository';
import { Proveedor, ProveedorRelations } from '../models';
import { MaaimssqlDataSource } from '../datasources';
export declare class ProveedorRepository extends DefaultCrudRepository<Proveedor, typeof Proveedor.prototype.id, ProveedorRelations> {
    constructor(dataSource: MaaimssqlDataSource);
}
