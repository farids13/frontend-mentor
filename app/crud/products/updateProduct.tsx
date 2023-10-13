"use client"
import { SyntheticEvent, useState } from "react"
import type { Brand } from "@prisma/client";
import { useRouter } from "next/navigation";
import axios from "axios";

type Product = {
    id: number;
    title: string;
    price: number;
    brandId: number;
}

const UpdateProduct = ({brands, product} : {brands: Brand[] , product:Product}) => {
    const [title, setTitle] = useState(product.title);
    const [price, setPrice] = useState(product.price);
    const [brand, setBrand] = useState(product.brandId);
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const route = useRouter();

    const handleModal = () => {
        setIsOpen(!isOpen);
    }
    const handleUpdate = async (e : SyntheticEvent) => {
        e.preventDefault();
        setIsLoading(true);
        await axios.put(`/api/products/${product.id}`, {
            title:title,
            price:Number(price),
            brandId:Number(brand)
        });
        route.refresh();
        setIsOpen(false);
        setIsLoading(false);
    };

  return (
    <div>
        <button className="btn btn-success btn-sm text-[10px] text-white" onClick={handleModal}>update</button>

        <div className={isOpen ? "modal modal-open" : "modal"}>
            <div className="modal-box">
                <h3 className='font-bold text-lg'>Update New Product</h3>
                <form onSubmit={handleUpdate}>
                    <div className="form-control w-full">
                        <label className="label font-bold ">Product Name</label>
                        <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" className="input input-bordered" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label font-bold ">Price</label>
                        <input value={price} onChange={(e) => setPrice(Number(e.target.value))} type="text" className="input input-bordered" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label font-bold ">Brand</label>
                        <select value={brand} onChange={(e) => setBrand(Number(e.target.value))} className="select select-bordered">
                            <option value="" disabled>Select A Brand</option>
                            {brands.map((brand) => (
                                <option value={brand.id} key={brand.id}>{brand.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="modal-action">
                        <button type='button' className='btn' onClick={handleModal}>Close</button>
                        {!isLoading ? (
                            <button type='submit' className='btn'>Submit</button>
                        ) : (
                            <button className="btn loading">Updating....</button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default UpdateProduct
