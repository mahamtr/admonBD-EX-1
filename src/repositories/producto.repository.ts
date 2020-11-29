import {DefaultCrudRepository} from '@loopback/repository';
import {Producto, ProductoRelations} from '../models';
import {MaaimssqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ProductoRepository extends DefaultCrudRepository<
  Producto,
  typeof Producto.prototype.id,
  ProductoRelations
> {
  constructor(
    @inject('datasources.maaimssql') dataSource: MaaimssqlDataSource,
  ) {
    super(Producto, dataSource);
  }
}
