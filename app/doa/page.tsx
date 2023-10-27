"use client"
import React, {useEffect, useState} from 'react';
import {getList} from "@/app/doa/api";

function Doa() {

    interface Data{

        arti:string,
        asma?:any
        audio?:any,
        ayat?:any,
        keterangan?:any,
        nama?:any,
        nomor?:any,
        rukuk?:any,
        type?:any,
        urut?:any
    }

    const [doa, setDoa] = useState<Data[]>([]);
    useEffect(  () => {
        async function fetchData() {
            try {
                const listDoa = await getList();
                setDoa(listDoa);
                console.log(listDoa);
            } catch (error) {
                console.error(error);
            }
        }

        fetchData();
    }, []); 

  return (
    <div>
        <h1>
            {doa.map((p,i) =>(
                <p key={p.nama}>{p.arti} = {p.nama} = {p.ayat} = {p.asma}</p>

            ))}
        </h1>
    </div>
  );
}

export default Doa;
