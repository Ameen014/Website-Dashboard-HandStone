// import { db } from '@vercel/postgres';
import { users, exchange, categories } from '../lib/placeholder-data';
import bcrypt from 'bcrypt';
import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL || "");

async function seedUsers() {
    await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await sql`
        CREATE TABLE IF NOT EXISTS users (
            id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            password TEXT NOT NULL
        );
        `;
    const insertedUsers = await Promise.all(
        users.map(async (user) => {
            const hashedPassword = await bcrypt.hash(user.password, 10);
            return await sql`
                        INSERT INTO users (id , name , password)
                        VALUES (${user.id} , ${user.name} , ${hashedPassword})
                        ON CONFLICT (id) DO NOTHING;
            `;
        })
    );
    return insertedUsers;
};

async function seedExchange () {
    await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"; `;
    await sql`
        CREATE TABLE IF NOT EXISTS exchange(
        id INT PRIMARY KEY,
        dolar INT NOT NULL
        );
        `;

    const insertedExchanges = await Promise.all(
        exchange.map(async (ex) => {
           await sql`
                INSERT INTO exchange (id , dolar )
                VALUES (${ex.id} , ${ex.dolar})
                ON CONFLICT (id) DO NOTHING;
            `;
        })
    );
    return insertedExchanges;
};

async function seedCategories () {
    await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await sql`
        CREATE TABLE IF NOT EXISTS categories(
        id INT PRIMARY KEY,
        name VARCHAR(255) NOT NULL
    );
    `;

    const insertedCategories = await Promise.all(
        categories.map(async (category) => {
           await sql`
                INSERT INTO categories (id , name )
                VALUES (${category.id} , ${category.name})
                ON CONFLICT (id) DO NOTHING;
            `;
        })
    );
    return insertedCategories;
};

async function seedSizes () {
    await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await sql`
        CREATE TABLE IF  NOT EXISTS sizes(
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        unit VARCHAR(255) NOT NULL,
        price FLOAT NOT NULL
        );
    `;
};

async function seedProducts () {
    await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await sql`
        CREATE TABLE IF NOT EXISTS products(
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        photo VARCHAR(255) NOT NULL ,
        categoryId INT NOT NULL,
        sizeId INT NOT NULL,
        isNew INT NOT NULL ,
        CONSTRAINT fk_category FOREIGN KEY (categoryId) REFERENCES categories(id) ON DELETE CASCADE,
        CONSTRAINT fk_size FOREIGN KEY (sizeId) REFERENCES sizes(id) ON DELETE CASCADE
        );
    `;
    // const insertedProducts = await Promise.all(
    //     products.map(async (product)=> 
    //     await sql`
    //         INSERT INTO products (id , name , photo , categoryId , sizeId , isNew )
    //         VALUES (${product.id} , ${product.name} , ${product.photo} , ${product.categoryId} , ${product.sizeId} , ${product.isNew})
    //         ON CONFLICT (id) DO NOTHING;
    //         `)
    // )
    // return insertedProducts;
};

async function seedOrders () {
    await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await sql`
        CREATE TABLE IF NOT EXISTS orders(
        id SERIAL PRIMARY KEY ,
        customerName VARCHAR(255) NOT NULL,
        phoneNumber VARCHAR(255) NOT NULL,        
        address VARCHAR(255) NOT NULL,
        deliveryCompany VARCHAR(255),
        cartItems VARCHAR(255) NOT NULL,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    `;
};

async function seedSellers () {
    await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await sql`
        CREATE TABLE IF NOT EXISTS sellers(
        id SERIAL PRIMARY KEY ,
        name VARCHAR(255) NOT NULL,
        creditor INT NOT NULL        
        );
    `;
};

async function seedBuyers () {
    await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await sql`
        CREATE TABLE IF NOT EXISTS buyers(
        id SERIAL PRIMARY KEY ,
        name VARCHAR(255) NOT NULL,
        debtor INT NOT NULL        
        );
    `;
};

async function seedSales () {
    await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await sql`
        CREATE TABLE IF NOT EXISTS sales(
        id SERIAL PRIMARY KEY,
        products VARCHAR(255) NOT NULL,
        total INT NOT NULL,
        paid INT NOT NULL,
        rest INT NOT NULL,
        buyerId INT NOT NULL,
        status BOOLEAN NOT NULL,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        CONSTRAINT fk_buyer FOREIGN KEY (buyerId) REFERENCES buyers(id) ON DELETE CASCADE
        );
    `;
};

async function seedPurchases () {
    await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await sql`
        CREATE TABLE IF NOT EXISTS purchases(
        id SERIAL PRIMARY KEY,
        products VARCHAR(255) NOT NULL,
        total INT NOT NULL,
        paid INT NOT NULL,
        rest INT NOT NULL,
        sellerId INT NOT NULL,
        status BOOLEAN NOT NULL,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        CONSTRAINT fk_seller FOREIGN KEY (sellerId) REFERENCES sellers(id) ON DELETE CASCADE
        );
    `;
};

async function seedExpenses () {
    await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await sql`
        CREATE TABLE IF NOT EXISTS expenses(
        id SERIAL PRIMARY KEY,
        type VARCHAR(255) NOT NULL,
        total INT NOT NULL,
        "for" VARCHAR(255),
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    `;
};

export async function GET() {
    try{
        await sql`BEGIN`
        // await sql`DROP TABLE IF EXISTS users;`  
        // await sql`DROP TABLE IF EXISTS exchange;`  
        // await sql`DROP TABLE IF EXISTS categories;`  
        // await sql`DROP TABLE IF EXISTS sizes;`
        // await sql`DROP TABLE IF EXISTS products;`
        // await sql`DROP TABLE IF EXISTS orders;`
        //  await sql`DROP TABLE IF EXISTS sales;`
        //  await sql`DROP TABLE IF EXISTS purchases;`
        // await seedUsers();
        // await seedExchange();
        // await seedCategories();
        // await seedSizes();
        // await seedProducts();
        // await seedOrders();
        // await seedSellers();
        // await seedBuyers();
        // await seedSales();
        // await seedPurchases();
        // await seedExpenses();
        await sql`COMMIT`
        return Response.json({ message: 'Database seeded successfully' });
    } catch (error) {
      await sql`ROLLBACK`;
      return Response.json({ error }, { status: 500 });
    }
}

