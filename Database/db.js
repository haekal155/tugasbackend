import mysql from 'mysql2/promise';
import dotenv from "dotenv"
dotenv.config()

const db = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
});

async function testConnection() {
    try {
        await db.getConnection();
        console.log("Koneksi ke database berhasil!");
    } catch (error) {
        console.error("Gagal terhubung ke database:", error);
    }
}

async function query(command, values) {
    try {
        const [value] = await db.query(command, values ?? []);
        return value;
    } catch (error) {
        console.error(error);
    }
}

export { query, testConnection };