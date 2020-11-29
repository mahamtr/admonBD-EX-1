import { DefaultCrudRepository } from '@loopback/repository';
import { Categoria, CategoriaRelations } from '../models';
import { MaaimssqlDataSource } from '../datasources';
export declare class CategoriaRepository extends DefaultCrudRepository<Categoria, typeof Categoria.prototype.id, CategoriaRelations> {
    constructor(dataSource: MaaimssqlDataSource);
}
