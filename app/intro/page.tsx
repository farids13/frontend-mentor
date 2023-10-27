"use client"
import {useState} from 'react';
import './style.css'
import iconError from '@/public/intro/images/icon-error.svg'
import Image from 'next/image';

const Intro = () => {


    type FieldData = {
        value: string;
        hidden: string;
        border: string;
    };

    type FieldName = 'firstName' | 'lastName' | 'email' | 'password';

    type Data = Record<FieldName, FieldData>;

    const initialFieldState: FieldData = {
        value: '',
        hidden: 'hidden',
        border: 'border-2',
    };

    const initialData: Data = {
        firstName: {...initialFieldState},
        lastName: {...initialFieldState},
        email: {...initialFieldState},
        password: {...initialFieldState},
    };

    const [data, setData] = useState(initialData);

    const handleChange = (fieldName: FieldName, e: React.ChangeEvent<HTMLInputElement>) => {
        const updatedData = {...data};
        updatedData[fieldName].value = e.target.value;
        setData(updatedData);
    };

    const reset = (f:FieldName) => {
        const original = {...data};
        original[f].border = initialFieldState.border;
        original[f].hidden = initialFieldState.hidden;
    }

    const resetInit = () => {
        reset('firstName');
        reset('lastName');
        reset('email');
        reset('password');
    }

    const [plEmail, setPlEmail] = useState('Email Address');
    const newData = {...data};
    const checkSubmit = (e: any) => {
        e.preventDefault();

        resetInit();


        if (!standartInput(newData.firstName.value)) {
            newData.firstName.hidden = '';
            newData.firstName.border = 'border-2 border-red-500';
        }
        if (!standartInput(newData.lastName.value)) {
            newData.lastName.hidden = '';
            newData.lastName.border = 'border-2 border-red-500';
        }
        if (!validateEmail(newData.email.value)) {
            newData.email.hidden = '';
            newData.email.border = 'border-2 border-red-500 placeholder-red-500';
            setPlEmail('faridsatria24@gmail.com')
        }
        if (!standartInput(newData.password.value)) {
            newData.password.hidden = '';
            newData.password.border = 'border-2 border-red-500';
        }

        setData(newData);
    };

    const standartInput = (e: any) => {
        const nameRegex = /^[a-zA-Z\s'-]+$/;
        return nameRegex.test(e);
    }

    const validateEmail = (p: any) => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(p);
    };


    return (
        <main
            className="flex justify-center items-center h-screen lg:h- lg:py-20 bg-introRed bg-[url('/intro/images/bg-intro-desktop.png')] bg-no-repeat bg-center lg:bg-[url('/intro/images/bg-intro-mobile.png')] bg-fixed bg-cover">
            <div className="w-[1440px] h-[800px] flex justify-center items-center font-poppins lg:w-full lg:h-full">
                <div className=" w-[77%] min-h-[70%] max-h-full flex justify-center items-center lg:flex-col lg:text-center lg:h-fit lg:w-full  ">
                    <div className='text-white w-1/2 lg:w-[80%] lg:mb-5'>
                        <h1 className='text-5xl font-[700] mb-7 leading-[60px] tracking-[0.5px]'>Learn to code by
                            watching others</h1>
                        <p>
                            See how experienced developers solve problems in real-time. Watching scripted tutorials is
                            great,
                            but understanding how developers think is invaluable.
                        </p>
                    </div>
                    <div className='w-1/2 h-full flex flex-col items-end gap-6 lg:w-[80%]'>
                        <div
                            className='w-[97%] h-[58px] rounded-xl text-center  box-border text-white text-[16px] mt-2 grid place-items-center tracking-tight bg-introBlue shadow-2xl'>
                            <p><b>Try it free 7 days </b> then $20/mo. thereafter</p></div>
                        <form onSubmit={checkSubmit}
                              className='w-[97%] h-[90%] flex flex-col gap-5 p-10 pt-11 bg-intro rounded-lg bg-white lg:min-h-[520px]'>
                            <div className='relative'>
                                <input value={data.firstName.value} onChange={(e) => handleChange('firstName', e)}
                                       className={`w-full rounded-md h-[55px] indent-8 font-bold text-[14px] bg-transparent mb-2 ${data.firstName.border}`}
                                       id='firstName' type="text" placeholder="First Name"/>
                                <Image
                                    className={`absolute right-[26px] -translate-y-[90%] top-1/2 ${data.firstName.hidden}`}
                                    src={iconError} alt="Icon Error"/>
                                <div className={`text-introRed text-end text-[11px] ${data.firstName.hidden}`}>First
                                    Name cannot be empty
                                </div>
                            </div>
                            <div className='relative'>
                                <input value={data.lastName.value} onChange={(e) => handleChange('lastName', e)}
                                       className={`w-full rounded-md h-[55px] indent-8 font-bold text-[14px] bg-transparent mb-2 ${data.lastName.border}`}
                                       id='lastName' type="text" placeholder='Last Name'/>
                                <Image className={`absolute right-[26px] -translate-y-[90%] top-1/2 ${data.lastName.hidden}`}
                                       src={iconError} alt="Icon Error"/>
                                <div className={`text-introRed text-end text-[11px] ${data.lastName.hidden}`}>Last Name cannot be
                                    empty
                                </div>
                            </div>
                            <div className='relative'>
                                <input value={data.email.value} onChange={(e) => handleChange('email', e)}
                                       className={`w-full rounded-md h-[55px] indent-8 font-bold text-[14px] bg-transparent mb-2 ${data.email.border}`}
                                       id='email' type="email" placeholder={`${plEmail}`}/>
                                <Image className={`absolute right-[26px] -translate-y-[90%] top-1/2 ${data.email.hidden}`}
                                       src={iconError} alt="Icon Error"/>
                                <div className={`text-introRed text-end text-[11px] ${data.email.hidden}`}>Looks like this is not
                                    an email
                                </div>
                            </div>
                            <div className='relative'>
                                <input value={data.password.value} onChange={(e) => handleChange('password',e)}
                                       className={`w-full rounded-md h-[55px] indent-8 font-bold text-[14px] bg-transparent mb-2 ${data.password.border}`}
                                       id='password' type="password" placeholder='Password'/>
                                <Image className={`absolute right-[26px] -translate-y-[90%] top-1/2 ${data.password.hidden}`}
                                       src={iconError} alt="Icon Error"/>
                                <div className={`text-introRed text-end text-[11px] ${data.password.hidden}`}>Password Cannot be
                                    empty
                                </div>
                            </div>
                            <button
                                className='h-[55px] mt-1 text-white uppercase text-[14px] rounded-lg tracking-widest bg-introGreen font-[600] shadow-lg '>Claim
                                your free trial
                            </button>
                            <p className='text-[11px] text-center text-introGrayishBlue'>By clicking the button, you are
                                agreeing to our <b className='text-introRed'>Terms and Services</b></p>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Intro
