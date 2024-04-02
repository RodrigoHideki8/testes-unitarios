import { Pool } from 'pg';

class PostgreSQL {
    private static instance: PostgreSQL;
    private pool: Pool;

    private constructor() {
        this.pool = new Pool({
            user: process.env.POSTGRES_USERNAME,
            host: process.env.POSTGRES_HOST,
            database: process.env.POSTGRES_DATABASE,
            password: process.env.POSTGRES_PASSWORD,
            port: 5432,
        });
    }

    public static getInstance(): PostgreSQL {
        if (!PostgreSQL.instance) {
            PostgreSQL.instance = new PostgreSQL();
        }
        return PostgreSQL.instance;
    }

    public async query(sql: string, params?: any[]): Promise<any> {
        const client = await this.pool.connect();
        try {
            return await client.query(sql, params);
        } finally {
            client.release();
        }
    }
}

export default PostgreSQL;