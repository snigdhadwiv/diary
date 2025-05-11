// app/api/raag/route.js
import { pool } from '@/lib/db';

export async function GET() {
  try {
    const [rows] = await pool.query('SELECT * FROM raags');
    return new Response(JSON.stringify(rows), { status: 200 });
  } catch (err) {
    console.error('DB error:', err);
    return new Response('Failed to fetch raags', { status: 500 });
  }
}
