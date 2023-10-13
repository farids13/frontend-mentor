import { PrismaClient } from '@prisma/client'
import React from 'react'
const prisma = new PrismaClient();
import AddProduct from './addProduct';
import DeleteProduct from './deleteProduct';
import UpdateProduct from './updateProduct';

const getProducts = async () => {

    const res = await prisma.product.findMany({
        select:{
            id:true,
            title:true,
            price:true,
            brandId:true,
            brand:true,
        }

    });
    return res;
}

const getBrands = async () => {
    const res = await prisma.brand.findMany();
    return res;
}

const product = async () => {

    const [products, brands] = await Promise.all([getProducts(), getBrands()]);

    // const products = await getProducts();
    // console.log(products);
  return (
    <div>
        <div className="mb-2">
            <AddProduct brands={brands}/>
        </div>
        <table className='table w-full'>
            <thead>
                <tr>
                    <th>No</th>
                    <th>ID</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Brand</th>
                    <th className='text-center'>Actions</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product, index) =>(
                    <tr key={product.id}>
                    <td>{index + 1}</td>
                    <td>{product.id}</td>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td>{product.brand.name}</td>
                    <td className='flex gap-2'>
                        <DeleteProduct product={product}/>
                        <UpdateProduct product={product} brands={brands}/>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default product
