import { AdmonBdEx1Application } from '../..';
import { Client } from '@loopback/testlab';
export declare function setupApplication(): Promise<AppWithClient>;
export interface AppWithClient {
    app: AdmonBdEx1Application;
    client: Client;
}
