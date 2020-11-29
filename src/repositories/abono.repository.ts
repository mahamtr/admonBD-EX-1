import {DefaultCrudRepository} from '@loopback/repository';
import {Abono, AbonoRelations} from '../models';
import {MaaimssqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class AbonoRepository extends DefaultCrudRepository<
  Abono,
  typeof Abono.prototype.id,
  AbonoRelations
> {
  constructor(
    @inject('datasources.maaimssql') dataSource: MaaimssqlDataSource,
  ) {
    super(Abono, dataSource);
  }
}
