import { join } from 'path';
export default{
    type: 'mysql',
    host: '175.24.118.64',
    port: 3306,
    username: 'root',
    password: '190629hwq-WYB',
    database: 'node_sql',
    entities: [join(__dirname, '../', '**/**.entity{.ts,js}')],
    synchronize: true
}