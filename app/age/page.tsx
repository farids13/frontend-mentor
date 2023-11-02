"use client"
import React, { useEffect, useState } from 'react';
import './style.css';

const Age = () => {

    const [year, setYear] = useState("--");
    const [month, setMonth] = useState("--");
    const [days, setDays] = useState("--");

    const [requiredDay, setRequiredDay] = useState(false);
    const [requiredMonth, setRequiredMonth] = useState(false);
    const [requiredYear, setRequiredYear] = useState(false);

    const [validDay, setValidDay] = useState(false);
    const [validMonth, setValidMonth] = useState(false);
    const [validYear, setValidYear] = useState(false);

    const [vDay, setVDay] = useState("");
    const [vMonth, setVMonth] = useState("");
    const [vYear, setVYear] = useState("");

    function reset() {
        setRequiredDay(false);
        setRequiredMonth(false);
        setRequiredYear(false);
        setValidDay(false);
        setValidMonth(false);
        setValidYear(false);
    }

    function submit(){
        reset();
        const currentDate = new Date();
        const ageDate = new Date(Number(vYear), Number(vMonth) - 1, Number(vDay));
        let isWrong = false;

        if(!vDay || Number(vDay) < 0) {
            setRequiredDay(true);
            isWrong = true;
        }else{
            if(Number(vDay) > new Date(Number(vYear), Number(vMonth), 0).getDate() ){
                setValidDay(true);
                setRequiredDay(true);
                isWrong = true;
            }
        }
        if(!vMonth || Number(vMonth) < 0){
            setRequiredMonth(true);
            isWrong = true;
        }else{
            if(Number(vMonth) > 12){
                setValidMonth(true);
                setRequiredMonth(true);
                isWrong = true;
            }
        }
        if(!vYear || Number(vYear) < 0){
            setRequiredYear(true);
            isWrong = true;
        }else{
            if(Number(vYear) > 0 && Number(vYear) > currentDate.getFullYear() ){
                setValidYear(true);
                setRequiredYear(true);
                isWrong = true;
            }
        }
        if(ageDate.getTime() > currentDate.getTime()){
            isWrong = true;
            setValidYear(true);
            setRequiredYear(true);
        }

        if(!isWrong){
            const count = currentDate.getTime() - ageDate.getTime();
            
            setYear(String(currentDate.getFullYear() - ageDate.getFullYear()));
            setMonth(String((currentDate.getMonth()) - ageDate.getMonth()));
            setDays(String(currentDate.getDate() - ageDate.getDate()));
            if (currentDate.getDate() - ageDate.getDate() < 0) {
                setMonth(String((currentDate.getMonth()) - ageDate.getMonth() - 1));
                setDays(String((currentDate.getDate() - ageDate.getDate()) + new Date(Number(vYear), Number(vMonth), 0).getDate()));
            }
        }else{
            setYear("--");
            setMonth("--");
            setDays("--");
        }

    }

    useEffect(()=>{
        document.title = "Frontend Mentor | Age calculator app";
    })

  return (
    <main className='font-poppins flex justify-center items-center min-h-screen'>
        <div className='bg-ageWhite relative p-14 w-[840px] h-[650px] mt-9 rounded-3xl rounded-br-[200px]'>
            <div className='flex min-h-[100px] gap-8'>
                <div className='flex flex-col'>
                    <span className={`uppercase text-sm font-[700] tracking-[3px] ${requiredDay ? "text-ageLightRed" : "text-ageOffBlack"}`}>day</span>
                    <input onChange={(e) => setVDay(e.target.value)} value={vDay} className = {`border border-ageOffBlack w-[160px] h-[70px] mt-2 bg-transparent rounded-lg font-[700] text-[30px] tracking-wider indent-6 ${requiredDay ? "border-ageLightRed" : ""}`} type="number" />
                    <p className={`italic text-[14px] mt-2 text-ageLightRed ${!requiredDay ? "hidden" : ""}`}>{!validDay ? "This field is required" : "Must be a valid date"}</p>
                </div>
                <div className='flex flex-col'>
                    <span className={`uppercase text-sm font-[700] tracking-[3px] ${requiredMonth ? "text-ageLightRed" : "text-ageOffBlack"}`}>month</span>
                    <input value={vMonth} onChange={(e) => setVMonth(e.target.value)} className = {`border border-ageOffBlack w-[160px] h-[70px] mt-2 bg-transparent rounded-lg font-[700] text-[30px] tracking-wider indent-6 ${requiredMonth ? "border-ageLightRed" : ""}`} type="number" />
                    <p className={`italic text-[14px] mt-2 text-ageLightRed ${!requiredMonth ? "hidden" : ""} `}>{!validMonth ? "This field is required" : "Must be a valid month"}</p>
                </div>
                <div className='flex flex-col'>
                    <span className={`uppercase text-sm font-[700] tracking-[3px] ${requiredYear ? "text-ageLightRed" : "text-ageOffBlack"}`}>Year</span>
                    <input value={vYear} onChange={(e) => setVYear(e.target.value)} className = {`border border-ageOffBlack w-[160px] h-[70px] mt-2 bg-transparent rounded-lg font-[700] text-[30px] tracking-wider indent-6 ${requiredYear ? "border-ageLightRed" : ""}`} type="number" />
                    <p className={`italic text-[14px] mt-2 text-ageLightRed ${!requiredYear ? "hidden" : ""}`}>{!validYear ? "This field is required" : "Must be in the past"}</p>
                </div>
            </div>

            <button onClick={submit} className='flex w-full items-center'>
                <span className='w-[100%] border border-ageSmokeyGrey'></span>
                <div className='bg-agePurple w-[110px] h-[95px] rounded-full flex justify-center items-center '><img src="/age/assets/images/icon-arrow.svg" alt="Arrow Logo" /></div>
            </button>

            <div className='text-[98px] font-[800] italic leading-[115px] '>
                <h1><b className='text-agePurple text-[100px]'>{year}</b> years</h1>
                <h1><b className='text-agePurple text-[100px]'>{month}</b> months</h1>
                <h1><b className='text-agePurple text-[100px]'>{days}</b> days</h1>
            </div>

        </div>
    </main>
  )
}

export default Age
