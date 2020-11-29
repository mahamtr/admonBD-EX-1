import { MaaimssqlDataSource } from '../datasources';
export declare class ViewsControllerController {
    private dataSource;
    constructor(dataSource: MaaimssqlDataSource);
    transaccionesPorDia(): Promise<any>;
    clientesFrecuentesPagadoresYDeudores(): Promise<any>;
    obtenerGastosCuentaPersonal(): Promise<any>;
    obtenerProductosConPrecio30(): Promise<any>;
    obtenerProductosConPrecioDefinidoPorProveedor(): Promise<any>;
    obtenerVentasPorCategorias(): Promise<any>;
    ClasificarProveedoresStoreProcedure(fechaInicial: string, fechaFinal: string): Promise<any>;
}
