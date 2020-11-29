import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Abono } from '../models';
import { AbonoRepository } from '../repositories';
export declare class AbonoContolerController {
    abonoRepository: AbonoRepository;
    constructor(abonoRepository: AbonoRepository);
    create(abono: Omit<Abono, 'id'>): Promise<Abono>;
    count(where?: Where<Abono>): Promise<Count>;
    find(filter?: Filter<Abono>): Promise<Abono[]>;
    updateAll(abono: Abono, where?: Where<Abono>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Abono>): Promise<Abono>;
    updateById(id: number, abono: Abono): Promise<void>;
    replaceById(id: number, abono: Abono): Promise<void>;
    deleteById(id: number): Promise<void>;
}
