import { neon } from '@neondatabase/serverless'
import { env } from "@repo/env";

export const GET = async (): Promise<Response> => {
    const sql = neon(env.DATABASE_URL)
    const result = await sql`SELECT * from "Page";`
    return new Response(JSON.stringify({ result }), { status: 200, headers: { 'Content-Type': 'application/json' } });
};
