import { DefaultCrudRepository } from '@loopback/repository';
import { Credito, CreditoRelations } from '../models';
import { MaaimssqlDataSource } from '../datasources';
export declare class CreditoRepository extends DefaultCrudRepository<Credito, typeof Credito.prototype.id, CreditoRelations> {
    constructor(dataSource: MaaimssqlDataSource);
}
