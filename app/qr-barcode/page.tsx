import React from 'react'
import imgBarcode from "../../public/qr/images/image-qr-code.png";
import Image from 'next/image';

const qrBarcode = () => {
  return (
    <>
    <div className="flex justify-center items-center h-screen bg-lightGray bg-example-bg bg-no-repeat bg-fixed bg-center" >
      <main className="container font-outfit mx-auto w-[20em] h-[31em] rounded-3xl p-4 bg-white shadow-lg shadow-gray-600">
        <Image src={imgBarcode} alt="Logo Barcode" className='rounded-xl'/>
        <div className="title mt-4 p-2 text-center text-base leading-3">
          <h1 className="text-center font-bold text-xl tracking-wider mb-3">Improve your front-end skills by building projects</h1>
          <span className="text-base items-center tracking-tight leading-5">Scan the QR code to visit Frontend Mentor and take your coding skills to <br /> the next level</span>
        </div>
      </main>
    </div>
  </>
  )
}

export default qrBarcode