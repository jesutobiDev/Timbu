import React from 'react'
import {Link} from "react-router-dom"

const Finalize = () => {
    return (
        <div className='flex flex-col gap-[20px] w-full items-center'>
            <p className='font-semibold text-[24px]'>Payment Successful!</p>
            <p className=' text-center'>Thank you for your purchase! Your order has been successfully processed. We’ll send a confirmation email with tracing details one your items ships</p>
            <Link to="/listings" className='w-full bg-[#121211] text-[#F3F2E8] py-3 rounded-full mt-2 cursor-pointer flex items-center justify-center' >Go back to Listings</Link>
        </div>
    )
}

export default Finalize