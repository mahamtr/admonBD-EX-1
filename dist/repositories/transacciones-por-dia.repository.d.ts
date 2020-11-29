import { DefaultCrudRepository } from '@loopback/repository';
import { MaaimssqlDataSource } from '../datasources';
import { TransaccionesPorDia, TransaccionesPorDiaRelations } from '../models';
export declare class TransaccionesPorDiaRepository extends DefaultCrudRepository<TransaccionesPorDia, typeof TransaccionesPorDia.prototype.id, TransaccionesPorDiaRelations> {
    constructor(dataSource: MaaimssqlDataSource);
}
