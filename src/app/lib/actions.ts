'use server';

import { neon } from "@neondatabase/serverless";
import { redirect } from 'next/navigation';
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const sql = neon(process.env.DATABASE_URL || "");


//first way by using z
///////////////////////////////////////
// import { z } from 'zod';
// const FormSchema = z.object({
//     customerName: z.string(),
//     deliveryCompany: z.string(),
//     address: z.string(),
//   });

// const { customerName, deliveryCompany, address } = FormSchema.parse({
//     customerName: formData.get('customerName'),
//     deliveryCompany: formData.get('deliveryCompany') || "",
//     address: formData.get('address'),
// });

export async function createOrder(formData : FormData) {

    const customerName = formData.get('customerName');
    const phoneNumber = formData.get('phoneNumber');
    const deliveryCompany =  formData.get('deliveryCompany') || "";
    const address =  formData.get('address');
    const cartItems = formData.get('cartItems');

    try{
        await sql`
            INSERT INTO orders ( customerName , phoneNumber , address, deliveryCompany , cartItems)
            VALUES ( ${customerName} , ${phoneNumber}  ,${address} , ${deliveryCompany} , ${cartItems}  )
        `;
        
    }catch(error){
        redirect('/products?ordercompleted=false',);
    }
    redirect('/products?ordercompleted=true',);
        
};

export async function login(formData : FormData) {
  const email = formData.get("email");
  const password = formData.get("password");

  try{
    const result = await sql`
                            SELECT *
                            FROM users
                            WHERE name = ${email} AND password = ${password}
                            `;
    return { status : true , name : result[0].name , message : "تم الدخول بنجاح أهلا" };
  }catch(error){
    return { status: false, message: "تأكد من كلمة المرور واسم المستخدم" };
  };
};

export async function updateExchange(formData : FormData) {
  const lira = formData.get("lira");
  const id = formData.get("id");

  try{
     await sql`
              UPDATE exchange
              SET dolar = ${lira}
              WHERE id = ${id}
              `;
    return { status : true , message : "تم تعديل سعر الصرف بنجاح" };
  }catch(error){
    return { status: false, message: "حدث خطأ أثناء تعديل سعر الصرف" };
  };
};

export async function addBuyer(formData : FormData) {

  const name = formData.get('name');
  const debtor = formData.get('debtor');

  try{
      await sql`
          INSERT INTO buyers ( name , debtor )
          VALUES ( ${name} , ${debtor}  )
      `;
      return { status : true , message : "تم اضافةالزبون بنجاح" };
  }catch(error){
    return { status: false, message: "حدث خطأ أثناء اضافة الزبون " };
  }
      
};

export async function addSeller(formData : FormData) {

  const name = formData.get('name');
  const creditor = formData.get('creditor');

  try{
      await sql`
          INSERT INTO sellers ( name , creditor )
          VALUES ( ${name} , ${creditor}  )
      `;
      return { status : true , message : "تم اضافة المورّد بنجاح" };
  }catch(error){
    return { status: false, message: "حدث خطأ أثناء اضافة المورّد " };
  }
      
};

export async function addPurchase(formData : FormData) {

  const products = formData.get('products');
  const total = formData.get('total');
  const paid = formData.get('paid');
  const rest = Number(formData.get('rest'));
  const sellerid = formData.get('sellerid');
  const status = formData.get('status');

  try{
      await sql`
          INSERT INTO purchases ( products , total , paid , rest , sellerid , status )
          VALUES ( ${products} , ${total} , ${paid} , ${rest} , ${sellerid} , ${status}  )
      `;
      if(rest > 0){
        await sql`
          UPDATE sellers
          SET creditor = creditor + ${+rest}
          WHERE id = ${sellerid}
        `;
      }
      return { status : true , message : "تم اضافة الفاتورة بنجاح" };
  }catch(error){
    return { status: false, message: "حدث خطأ أثناء اضافة الفاتورة " };
  }
      
};

export async function addSettlingSellerAccount(formData : FormData) {

  const id = formData.get('id');
  const total = formData.get('total');

  try{
        await sql`
          UPDATE sellers
          SET creditor = creditor - ${+total}
          WHERE id = ${id}
        `;
      const [check] =  await sql`
          SELECT creditor
          FROM sellers
          WHERE id = ${id} `;

      if (check.creditor == 0){
        await sql`
        UPDATE purchases
        SET status = TRUE
        WHERE sellerid = ${id}`;
      };
    return { status : true , message : "تم تسديد المبلغ بنجاح" };
  }catch(error){
    return { status: false, message: "حدث خطأ أثناء تسديد المبلغ " };
  }  
};

export async function addSettlingBuyerAccount(formData : FormData) {

  const id = formData.get('id');
  const total = formData.get('total');

  try{
        await sql`
          UPDATE buyers
          SET debtor = debtor - ${+total}
          WHERE id = ${id}
        `;
        const [check] =  await sql`
        SELECT debtor
        FROM buyers
        WHERE id = ${id} `;

        if (check.debtor == 0){
          await sql`
          UPDATE sales
          SET status = TRUE
          WHERE buyerid = ${id}`;
        };
    return { status : true , message : "تم تسديد المبلغ بنجاح" };
  }catch(error){
    return { status: false, message: "حدث خطأ أثناء تسديد المبلغ " };
  }  
};

export async function addSales(formData : FormData) {

  const products = formData.get('products');
  const total = formData.get('total');
  const paid = formData.get('paid');
  const rest = Number(formData.get('rest'));
  const buyerid = formData.get('buyerid');
  const status = formData.get('status');

  try{
      await sql`
          INSERT INTO sales ( products , total , paid , rest , buyerid , status )
          VALUES ( ${products} , ${total} , ${paid} , ${rest} , ${buyerid} , ${status}  )
      `;
      if(rest > 0){
        await sql`
          UPDATE buyers
          SET debtor = debtor + ${+rest}
          WHERE id = ${buyerid}
        `;
      }
      return { status : true , message : "تم اضافة الفاتورة بنجاح" };
  }catch(error){
    return { status: false, message: "حدث خطأ أثناء اضافة الفاتورة " };
  }
      
};

export async function addExpenses(formData : FormData) {

  const For = formData.get('for');
  const total = formData.get('total');
  const type = formData.get('type');

  try{
      await sql`
          INSERT INTO expenses ( type , total , "for" )
          VALUES ( ${type} , ${total} , ${For} )
      `;
      return { status : true , message : "تم اضافة الفاتورة بنجاح" };
  }catch(error){
    return { status: false, message: "حدث خطأ أثناء اضافة الفاتورة " };
  }
      
};

export async function addSizes(formData : FormData) {

  const name = formData.get('name');
  const price = formData.get('price');
  const unit= formData.get('unit');

  try{
      await sql`
          INSERT INTO sizes ( name , unit , price )
          VALUES ( ${name} , ${unit} , ${price} )
      `;
      return { status : true , message : "تم اضافة القياس بنجاح" };
  }catch(error){
    return { status: false, message: "حدث خطأ أثناء اضافة القياس " };
  }  
};

export async function updateSize(formData : FormData) {

  const price = formData.get('price');
  const id = formData.get('id');

  try{
      await sql`
          UPDATE sizes
          SET price = ${price}
          WHERE id = ${id}
      `;
      return { status : true , message : "تم تعديل السعر بنجاح" };
  }catch(error){
    return { status: false, message: "حدث خطأ أثناء تعديل السعر " };
  }  
};

export async function addProducts(formData : FormData) {

  const name = formData.get('name');
  const photo = formData.get('photo');
  const categoryId = formData.get('categoryId');
  const sizeId = formData.get('sizeId');
  let isNew =  formData.get('isNew') == null ? 0 : 1 ;

  try{
      await sql`
          INSERT INTO products ( name , photo  , sizeid , categoryid , isnew )
          VALUES ( ${name} , ${photo} , ${sizeId} , ${categoryId} ,${isNew} )
      `;
      return { status : true , message : "تم اضافة المنتج بنجاح" };
  }catch(error){
    return { status: false, message: "حدث خطأ أثناء اضافة المنتج " };
  }
      
};

export const uploadToCloudinary = async (file: string) => {
  try {
    const uploadResponse = await cloudinary.uploader.upload(file, {
      folder: "home",
    });
    return uploadResponse.secure_url;
  } catch (error) {
    console.error("Error uploading to Cloudinary:", error);
    throw new Error("Failed to upload to Cloudinary");
  }
};
