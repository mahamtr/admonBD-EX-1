import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MaaimssqlDataSource} from '../datasources';
import {TransaccionesPorDia, TransaccionesPorDiaRelations} from '../models';

export class TransaccionesPorDiaRepository extends DefaultCrudRepository<
  TransaccionesPorDia,
  typeof TransaccionesPorDia.prototype.id,
  TransaccionesPorDiaRelations
> {
  constructor(
    @inject('datasources.maaimssql') dataSource: MaaimssqlDataSource,
  ) {
    super(TransaccionesPorDia, dataSource);
  }
}
