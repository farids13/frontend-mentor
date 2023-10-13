"use client"
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { type } from 'os';
import React, { useState } from 'react'

type Product = {
    id: number;
    title: string;
    price: number;
    brandId: number;
}


const DeleteProduct = ({product} : {product : Product}) => {

    const [isOpen, setIsOpen] = useState(false);
    const route = useRouter();

    const handleModal = () =>{
        setIsOpen(!isOpen);
    }

    const handleDelete = async (productId:number) => {
        await axios.delete(`/api/products/${product.id}`)
        route.refresh();
        setIsOpen(false);

    }
  return (
    <div>
        <button type='button' onClick={handleModal} className='btn btn-error btn-sm text-white text-[10px]'>Delete</button>
        <div className={isOpen ? "modal modal-open" : "modal"}>
            <div className="modal-box">
                <h3 className='font-bold text-xl'>Are you sure to delete {product.title} ?</h3>
                <div className='modal-action'>
                    <button type='button' onClick={handleModal} className='btn'>No</button>
                    <button type='button' onClick={() => handleDelete(product.id)} className='btn'>Yes</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DeleteProduct
