"use client"
import { SyntheticEvent, useState } from "react"
import type { Brand } from "@prisma/client";
import { useRouter } from "next/navigation";
import axios from "axios";

const AddProduct = ({brands} : {brands:Brand[]}) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [brand, setBrand] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const route = useRouter();

    const handleModal = () => {
        setIsOpen(!isOpen);
    }
    const handleSubmit = async (e : SyntheticEvent) => {
        e.preventDefault();
        await axios.post('/api/products', {
            title:title,
            price:Number(price),
            brandId:Number(brand)
        });

        setTitle("");
        setBrand("");
        setPrice("");
        route.refresh();
        setIsOpen(false);
    };

  return (
    <div>

        <button className="btn" onClick={handleModal}>Add New</button>

        <div className={isOpen ? "modal modal-open" : "modal"}>
            <div className="modal-box">
                <h3 className='font-bold text-lg'>Add New Product</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-control w-full">
                        <label className="label font-bold ">Product Name</label>
                        <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" className="input input-bordered" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label font-bold ">Price</label>
                        <input value={price} onChange={(e) => setPrice(e.target.value)} type="text" className="input input-bordered" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label font-bold ">Brand</label>
                        <select value={brand} onChange={(e) => setBrand(e.target.value)} className="select select-bordered">
                            <option value="" disabled>Select A Brand</option>
                            {brands.map((brand) => (
                                <option value={brand.id} key={brand.id}>{brand.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="modal-action">
                        <button type='button' className='btn' onClick={handleModal}>Close</button>
                        <button type='submit' className='btn'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default AddProduct
