import { DefaultCrudRepository } from '@loopback/repository';
import { Abono, AbonoRelations } from '../models';
import { MaaimssqlDataSource } from '../datasources';
export declare class AbonoRepository extends DefaultCrudRepository<Abono, typeof Abono.prototype.id, AbonoRelations> {
    constructor(dataSource: MaaimssqlDataSource);
}
