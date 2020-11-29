import { DefaultCrudRepository } from '@loopback/repository';
import { OrdenProveedores, OrdenProveedoresRelations } from '../models';
import { MaaimssqlDataSource } from '../datasources';
export declare class OrdenProveedoresRepository extends DefaultCrudRepository<OrdenProveedores, typeof OrdenProveedores.prototype.id, OrdenProveedoresRelations> {
    constructor(dataSource: MaaimssqlDataSource);
}
