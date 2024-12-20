import React from 'react'
import { CheckCircle } from 'lucide-react'
import codeImg from "../assets/code.jpg"
import { checklistItems } from '../constants'

export default function WorkFlow(props) {
    

    return (
        <div className="mt-20">
            <h2 className='text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide'>
                Accelrate 
                <span className='bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text'>
                    {" "}
                    your coding flow</span>
            </h2>
            <div className="flex flex-wrap justify-center">
                <div className="p-2 w-full lg:w-1/2">
                <img src={codeImg} alt="Code" />
                </div>

                <div className="pt-12 w-full lg:w-1/2">
                {checklistItems.map((item,index)=>(
                    <div className="flex mb-12" key={index}>
                        <div className="text-green-400 mx-6 bg-netural-900 p-2 items-center rounded-full h-10 w-10 ">
                            <CheckCircle/>
                        </div>
                        <h5 className='mt-1 mb-2 text-xl'>
                            {item.title}
                        </h5>
                        <p className='text-md text-neutral-500'>
                            {item.description}
                        </p>
                    </div>
                ))}
                </div>
            </div>
        </div> 
    )
}
