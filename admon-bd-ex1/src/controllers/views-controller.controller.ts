// Uncomment these imports to begin using these cool features!

import {inject} from '@loopback/core';
import {get, param} from '@loopback/rest';
import {MaaimssqlDataSource} from '../datasources';
import {TransaccionesPorDia} from '../models';
import {ClientesFrecuentesPagadoresYDeudores} from '../models/clientes-frecuentes-pagadores-y-deudores.model';
import {ObtenerGastosCuentaPersonal} from '../models/obtener-gastos-cuenta-personal.model';
import {ObtenerProductosConPrecioDefinidoPorProveedor} from '../models/obtener-productos-con-precio-definido-por-proveedor.model';
import {ObtenerProductosConPrecio30} from '../models/obtener-productos-con-precio30.model';
import {ObtenerVentasPorCategorias} from '../models/obtener-ventas-por-categorias.model';

// import {inject} from '@loopback/core';


export class ViewsControllerController {
  private dataSource : any;
  constructor(
    @inject('datasources.maaimssql') dataSource: MaaimssqlDataSource,
  ) {
    this.dataSource = dataSource;
  }

  @get('/view/VentaControllerController', {
    responses: {
      '200': {
        description: 'TransaccionesPorDia model count',
        content: {'application/json': {schema: TransaccionesPorDia}},
      },
    },
  })
  async transaccionesPorDia(
  ): Promise<any> {
     return await this.dataSource.execute('select * from transaccionesPorDia');
  }

  @get('/view/ClientesFrecuentesPagadoresYDeudores', {
    responses: {
      '200': {
        description: 'ClientesFrecuentesPagadoresYDeudores model count',
        content: {'application/json': {schema: ClientesFrecuentesPagadoresYDeudores}},
      },
    },
  })
  async clientesFrecuentesPagadoresYDeudores(
  ): Promise<any> {
     return await this.dataSource.execute('select * from clientesFrecuentesPagadoresYDeudores');
  }

  @get('/view/ObtenerGastosCuentaPersonal', {
    responses: {
      '200': {
        description: 'ObtenerGastosCuentaPersonal model count',
        content: {'application/json': {schema: ObtenerGastosCuentaPersonal}},
      },
    },
  })
  async obtenerGastosCuentaPersonal(
  ): Promise<any> {
     return await this.dataSource.execute('select * from obtenerGastosCuentaPersonal');
  }

  @get('/view/ObtenerProductosConPrecio30', {
    responses: {
      '200': {
        description: 'ObtenerProductosConPrecio30 model count',
        content: {'application/json': {schema: ObtenerProductosConPrecio30}},
      },
    },
  })
  async obtenerProductosConPrecio30(
  ): Promise<any> {
     return await this.dataSource.execute('select * from obtenerProductosConPrecio30');
  }

  @get('/view/ObtenerProductosConPrecioDefinidoPorProveedor', {
    responses: {
      '200': {
        description: 'ObtenerProductosConPrecioDefinidoPorProveedor model count',
        content: {'application/json': {schema: ObtenerProductosConPrecioDefinidoPorProveedor}},
      },
    },
  })
  async obtenerProductosConPrecioDefinidoPorProveedor(
  ): Promise<any> {
     return await this.dataSource.execute('select * from obtenerProductosConPrecioDefinidoPorProveedor');
  }


  @get('/view/ObtenerVentasPorCategorias', {
    responses: {
      '200': {
        description: 'ObtenerVentasPorCategorias model count',
        content: {'application/json': {schema: ObtenerVentasPorCategorias}},
      },
    },
  })
  async obtenerVentasPorCategorias(
  ): Promise<any> {
     return await this.dataSource.execute('select * from obtenerVentasPorCategorias');
  }

  @get('/view/ClasificarProveedoresStoredProcedured/{fechaInicial}/{fechaFinal}', {
    responses: {
      '200': {
        description: 'ObtenerVentasPorCategorias model count',
        content: {'application/json': {schema: ObtenerVentasPorCategorias}},
      },
    },
  })
  async ClasificarProveedoresStoreProcedure(
    @param.path.string('fechaInicial') fechaInicial: string,
    @param.path.string('fechaFinal') fechaFinal: string,
  ): Promise<any> {
     return await this.dataSource.execute(`exec clasificarProveedores @fechaInicio = '${fechaInicial}',		@fechaFinal = '${fechaFinal}'`);
  }






}
