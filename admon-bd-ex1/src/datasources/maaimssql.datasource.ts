import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'maaimssql',
  connector: 'mssql',
  url: '',
  host: 'AMZIExamen1.mssql.somee.com',
  port: 1433,
  user: 'mahamtr_SQLLogin_1',
  password: '1stw1bs4jb',
  database: 'AMZIExamen1'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class MaaimssqlDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'maaimssql';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.maaimssql', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
