import Link from 'next/link'
import React from 'react'

const Success = () => {
  return (
    <div className='bg-white font-roboto w-[505px] h-[520px] rounded-[40px] p-16 pt-12 pb-16'>
        {/* <!-- Success message start -->  */}
        <img src="/newsletter/assets/images/icon-success.svg" alt="Icon success" />
        <h1 className='mt-9 text-[56px] leading-[60px] font-[700]'>Thanks for subscribing!</h1>
        <p className='mt-5'>
            A confirmation email has been sent to <b>ash@loremcompany.com.</b>
            Please open it and click the button inside to confirm your subscription.
        </p>
        <Link href="/newsletter">
          <button className='hover:bg-gradient-to-r from-newsletterFromGrad to-newsletterToGrad hover:shadow-lg bg-newsletterDarkSlateGrey mt-10 min-h-[55px] min-w-full rounded-lg text-white font-bold'>Dismiss message</button>
        </Link>
        {/* <!-- Success message end --> */}
    </div>
  )
}

export default Success
