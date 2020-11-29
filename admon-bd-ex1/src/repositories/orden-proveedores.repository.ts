import {DefaultCrudRepository} from '@loopback/repository';
import {OrdenProveedores, OrdenProveedoresRelations} from '../models';
import {MaaimssqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class OrdenProveedoresRepository extends DefaultCrudRepository<
  OrdenProveedores,
  typeof OrdenProveedores.prototype.id,
  OrdenProveedoresRelations
> {
  constructor(
    @inject('datasources.maaimssql') dataSource: MaaimssqlDataSource,
  ) {
    super(OrdenProveedores, dataSource);
  }
}
