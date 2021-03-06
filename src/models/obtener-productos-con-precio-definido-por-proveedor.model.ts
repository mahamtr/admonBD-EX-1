import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    idInjection: false,
    mssql: {schema: 'dbo', table: 'obtenerProductosConPrecioDefinidoPorProveedor'}
  }
})
export class ObtenerProductosConPrecioDefinidoPorProveedor extends Entity {
  @property({
    type: 'string',
    length: 255,
    mssql: {columnName: 'nombre', dataType: 'varchar', dataLength: 255, dataPrecision: null, dataScale: null, nullable: 'YES'},
  })
  nombre?: string;

  @property({
    type: 'number',
    precision: 53,
    mssql: {columnName: 'costo', dataType: 'float', dataLength: null, dataPrecision: 53, dataScale: null, nullable: 'YES'},
  })
  costo?: number;

  @property({
    type: 'number',
    precision: 53,
    mssql: {columnName: 'precio', dataType: 'float', dataLength: null, dataPrecision: 53, dataScale: null, nullable: 'YES'},
  })
  precio?: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<ObtenerProductosConPrecioDefinidoPorProveedor>) {
    super(data);
  }
}

export interface ObtenerProductosConPrecioDefinidoPorProveedorRelations {
  // describe navigational properties here
}

export type ObtenerProductosConPrecioDefinidoPorProveedorWithRelations = ObtenerProductosConPrecioDefinidoPorProveedor & ObtenerProductosConPrecioDefinidoPorProveedorRelations;
