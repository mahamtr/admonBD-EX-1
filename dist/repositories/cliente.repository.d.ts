import { DefaultCrudRepository } from '@loopback/repository';
import { Cliente, ClienteRelations } from '../models';
import { MaaimssqlDataSource } from '../datasources';
export declare class ClienteRepository extends DefaultCrudRepository<Cliente, typeof Cliente.prototype.id, ClienteRelations> {
    constructor(dataSource: MaaimssqlDataSource);
}
