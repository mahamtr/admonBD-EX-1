import { Entity } from '@loopback/repository';
export declare class Producto extends Entity {
    id: number;
    nombre?: string;
    categoriaId?: number;
    [prop: string]: any;
    constructor(data?: Partial<Producto>);
}
export interface ProductoRelations {
}
export declare type ProductoWithRelations = Producto & ProductoRelations;
