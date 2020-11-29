import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Credito } from '../models';
import { CreditoRepository } from '../repositories';
export declare class CreditoControllerController {
    creditoRepository: CreditoRepository;
    constructor(creditoRepository: CreditoRepository);
    create(credito: Omit<Credito, 'id'>): Promise<Credito>;
    count(where?: Where<Credito>): Promise<Count>;
    find(filter?: Filter<Credito>): Promise<Credito[]>;
    updateAll(credito: Credito, where?: Where<Credito>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Credito>): Promise<Credito>;
    updateById(id: number, credito: Credito): Promise<void>;
    replaceById(id: number, credito: Credito): Promise<void>;
    deleteById(id: number): Promise<void>;
}
