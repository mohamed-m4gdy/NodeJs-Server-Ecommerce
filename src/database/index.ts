import { Pool } from 'pg';
import config from '../utils/config';

const pool = new Pool({
  host: config.host,
  database: config.database,
  user: config.dbUser,
  password: config.dbPassword,
  port: parseInt(config.dbPort as string, 10),
  max: 4,
});

pool.on('error', (error: Error) => {
  console.log(error.message);
});

export default pool;
