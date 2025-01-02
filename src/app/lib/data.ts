import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL || "");

export async function fetchProductsSlider () {
  try{
    const data = await sql`
      SELECT p.name , c.name AS categoryName , s.name AS sizeName , (e.dolar * s.price) AS price , p.photo 
      FROM exchange e ,  products p
      JOIN categories c ON c.id = p.categoryid
      JOIN sizes s ON s.id = p.sizeId
    `;
    return data;
    
  }catch(error){
    console.error('Database Error:', error);
    throw new Error('Failed to fetch products data.');
  }
};

export async function fetchProducts (keywords : string , categoryId : number | null) {

  try{
    if(categoryId == null && keywords == ""){
      const data = await sql `
        SELECT p.id ,  p.name , c.name AS categoryName , s.name AS sizeName , s.unit AS sizeUnit, (e.dolar * s.price) AS price , p.photo 
        FROM exchange e ,  products p
        JOIN categories c ON c.id = p.categoryid
        JOIN sizes s ON s.id = p.sizeId
      `;
     return data;
    }
    else if(categoryId == null && keywords != ""){
      const data = await sql `
        SELECT p.id ,  p.name , c.name AS categoryName , s.name AS sizeName , s.unit AS sizeUnit, (e.dolar * s.price) AS price , p.photo 
        FROM exchange e ,  products p
        JOIN categories c ON c.id = p.categoryid
        JOIN sizes s ON s.id = p.sizeId
        WHERE p.name ILIKE ${`%${keywords}%`}
      `;
     return data;
    }
    else if(categoryId !== null && keywords == ""){
      const data = await sql`
        SELECT p.id ,  p.name , c.name AS categoryName , s.name AS sizeName , s.unit AS sizeUnit, (e.dolar * s.price) AS price , p.photo 
        FROM exchange e ,  products p
        JOIN categories c ON c.id = p.categoryid
        JOIN sizes s ON s.id = p.sizeId
        WHERE c.id = ${categoryId}
      `;
     return data;
    }
    else{
      const data = await sql`
      SELECT p.id ,  p.name , c.name AS categoryName , s.name AS sizeName , s.unit AS sizeUnit, (e.dolar * s.price) AS price , p.photo 
      FROM exchange e ,  products p
      JOIN categories c ON c.id = p.categoryid
      JOIN sizes s ON s.id = p.sizeId
    WHERE 
      p.name ILIKE ${`%${keywords}%`} AND
      c.id = ${categoryId}
    `;
      return data;

    }
  }catch(error){
    console.error('Database Error:', error);
    throw new Error('Failed to fetch products data.');
  }
};

export async function fetchNewProducts (keywords : string , categoryId : number | null) {

  try{
    if(categoryId == null && keywords == ""){
      const data = await sql `
        SELECT p.id ,  p.name , c.name AS categoryName , s.name AS sizeName , s.unit AS sizeUnit, (e.dolar * s.price) AS price , p.photo 
        FROM exchange e ,  products p
        JOIN categories c ON c.id = p.categoryid
        JOIN sizes s ON s.id = p.sizeId
        WHERE p.isnew = 1
      `;
     return data;
    }
    else if(categoryId == null && keywords != ""){
      const data = await sql`
        SELECT p.id ,  p.name , c.name AS categoryName , s.name AS sizeName , s.unit AS sizeUnit, (e.dolar * s.price) AS price , p.photo 
        FROM exchange e ,  products p
        JOIN categories c ON c.id = p.categoryid
        JOIN sizes s ON s.id = p.sizeId
        WHERE p.name ILIKE ${`%${keywords}%`} AND
        p.isnew = 1
      `;
     return data;
    }
    else{
      const data = await sql`
      SELECT p.id ,  p.name , c.name AS categoryName , s.name AS sizeName , s.unit AS sizeUnit, (e.dolar * s.price) AS price , p.photo 
      FROM exchange e ,  products p
      JOIN categories c ON c.id = p.categoryid
      JOIN sizes s ON s.id = p.sizeId
    WHERE 
      p.name ILIKE ${`%${keywords}%`} AND
      c.id = ${categoryId} AND
      p.isnew = 1
    `;
      return data;

    }
  }catch(error){
    console.error('Database Error:', error);
    throw new Error('Failed to fetch products data.');
  }
};

export async function fetchCategories () {
  try{
    const data = await sql`
      SELECT *
      FROM categories 
    `;
    return data;
    
  }catch(error){
    console.error('Database Error:', error);
    throw new Error('Failed to fetch categories data.');
  }
};

export async function fetchSizes () {
  try{
    const data = await sql`
      SELECT *
      FROM sizes 
    `;
    return data;
    
  }catch(error){
    console.error('Database Error:', error);
    throw new Error('Failed to fetch Sizes data.');
  }
};

export async function fetchSizesById (id : number) {
  try{
    const data = await sql`
      SELECT *
      FROM sizes 
      WHERE id = ${id}
    `;
    return data;
    
  }catch(error){
    console.error('Database Error:', error);
    throw new Error('Failed to fetch Sizes data.');
  }
};

export async function fetchStatisticsExpenses (month? : number) {
  try{
    const query = month ? sql `
      SELECT 
          type AS name, 
          SUM(total) AS total_amount
      FROM 
          expenses
      WHERE 
          EXTRACT(MONTH FROM createdat) = ${month}
      GROUP BY 
          type;
    `
    :
    sql `
      SELECT 
          type AS name, 
          SUM(total) AS total_amount
      FROM 
          expenses
      GROUP BY 
          type;
    `;
    const data = await query;
    return data;
    
  }catch(error){
    console.error('Database Error:', error);
    throw new Error('Failed to fetch Expenses data.');
  }
};

export async function fetchStatisticsSales (month? : number) {
  try{
    const query = month ? sql `
      SELECT 
          b.name AS name, 
          SUM(s.total) AS total_amount
      FROM 
          sales s
      JOIN buyers b ON b.id = s.buyerid 
      WHERE 
          EXTRACT(MONTH FROM createdat) = ${month}

      GROUP BY 
          b.name;
    `
    :
    sql `
      SELECT 
          b.name AS name, 
          SUM(s.total) AS total_amount
      FROM 
          sales s
      JOIN buyers b ON b.id = s.buyerid 
      GROUP BY 
          b.name;
    `;
    const data = await query;
    return data;
    
  }catch(error){
    console.error('Database Error:', error);
    throw new Error('Failed to fetch Expenses data.');
  }
};

export async function fetchStatisticsPurchases (month? : number) {
  try{
    const query = month ?  sql `
      SELECT 
          s.name AS name, 
          SUM(p.total) AS total_amount
      FROM 
          purchases p
      JOIN sellers s ON s.id = p.sellerid 
      WHERE 
          EXTRACT(MONTH FROM createdat) = ${month}
      GROUP BY 
          s.name;
    `
    :
     sql `
      SELECT 
          s.name AS name, 
          SUM(p.total) AS total_amount
      FROM 
          purchases p
      JOIN sellers s ON s.id = p.sellerid 
      GROUP BY 
          s.name;
    `;
    const data = await query;
    return data;
    
  }catch(error){
    console.error('Database Error:', error);
    throw new Error('Failed to fetch Expenses data.');
  }
};

export async function fetchExchange () {
  try{
    const data = await sql `
      SELECT *
      FROM exchange 
    `;
    return data;
    
  }catch(error){
    console.error('Database Error:', error);
    throw new Error('Failed to fetch exchange data.');
  }
};

export async function fetchSellers (name? : string) {
  try{
    const query = name
      ? sql`SELECT * FROM sellers WHERE name ILIKE ${'%' + name + '%'}`
      : sql`SELECT * FROM sellers`;
      
    const data = await query;
    return data;
  }catch(error){
    console.error('Database Error:', error);
    throw new Error('Failed to fetch sellers data.');
  }
};

export async function fetchBuyers (name? : string) {
  try{
    const query = name
      ? sql`SELECT * FROM buyers WHERE name ILIKE ${'%' + name + '%'}`
      : sql`SELECT * FROM buyers`;
      
    const data = await query;
    return data;
  }catch(error){
    console.error('Database Error:', error);
    throw new Error('Failed to fetch buyers data.');
  }
};

export async function fetchPurchaseInvoice (seller? : string , time? : string) {
  try{
    const query = time ? sql`
      SELECT p.id, p.products, p.total, p.paid, p.rest, p.createdat, s.name AS sellersName , p.status
      FROM purchases p
      JOIN sellers s ON s.id = p.sellerid
      WHERE 
        s.name ILIKE ${'%' + seller + '%'} AND
        p.createdat >= ${time}::date AND   
        p.createdat < (${time}::date + interval '1 day') 
    `
    :
    sql`
      SELECT p.id, p.products, p.total, p.paid, p.rest, p.createdat, s.name AS sellersName , p.status
      FROM purchases p
      JOIN sellers s ON s.id = p.sellerid

    `

    const data = await query;
    return data;
  }catch(error){
    console.error('Database Error:', error);
    throw new Error('Failed to fetch purchases Invoices data.');
  }
};

export async function fetchSalesInvoice (buyer? : string , time? : string) {
  try{
    const query = time ? sql`
      SELECT s.id , s.products , s.total , s.paid , s.rest , s.createdat , b.name AS buyersName , s.status
      FROM sales s 
      JOIN buyers b ON b.id = s.buyerid 
      WHERE 
        b.name ILIKE ${'%' + buyer + '%'} AND
        s.createdat >= ${time}::date AND   
        s.createdat < (${time}::date + interval '1 day') 
    `
    :
    sql`
        SELECT s.id , s.products , s.total , s.paid , s.rest , s.createdat , b.name AS buyersName , s.status
        FROM sales s 
        JOIN buyers b ON b.id = s.buyerid 
        WHERE 
          b.name ILIKE ${'%' + buyer + '%'}
    `;

    const data = await query;
    return data;
  }catch(error){
    console.error('Database Error:', error);
    throw new Error('Failed to fetch Sales Invoices data.');
  }
};

export async function fetchExpensesInvoice (type?: string , time?: string) {
  try{
    const query = time ? sql`
      SELECT * 
      FROM expenses
      WHERE createdat  >= ${time}::date AND   
            createdat < (${time}::date + interval '1 day')
      `
    :
    sql`
      SELECT * 
      FROM expenses
      WHERE 
            type ILIKE ${'%' + type + '%'}
    `;

    const data = await query;
    return data;
    
  }catch(error){
    console.error('Database Error:', error);
    throw new Error('Failed to fetch expenses Invoices data.');
  }
};
