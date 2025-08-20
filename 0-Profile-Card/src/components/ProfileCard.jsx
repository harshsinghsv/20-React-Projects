import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";


const ProfileCard = ({name, role, img, buttonText, followers, following}) => {
  return (
    <div className='h-96 w-60 bg-gray-800 shadow-md rounded-3xl overflow-hidden p-1 font-roboto font-bold'>
        <div className='w-full h-[60%] overflow-hidden rounded-3xl'>
            <img src={img} alt={name} className='w-full h-full rounded-3xl mx-auto' />
        </div>
        
        <div className='flex flex-col gap-1.5 justify-start ml-2 mr-2 mt-3'>
            <h2 className='text-[18px] font-semibold text-white'>{name}</h2>
            <p className='text-[12px] text-gray-300'>{role}</p>
            <div className='flex items-center justify-center gap-2'>
                <div className='flex gap-1 justify-center items-center text-white text-[12px]'>
                    <FontAwesomeIcon icon={faUser} />
                    {followers}
                </div>
                <div className='flex gap-1 justify-center items-center text-white text-[12px] '>
                    <FontAwesomeIcon icon={faUserPlus} />
                    {following}

                </div>
                <div>
                    <button className='px-3 py-2 bg-gray-700 text-white text-[14px] rounded-full flex gap-1 justify-center items-center'>
                        {buttonText}
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </div>
            </div>
        </div>

    </div>
  )
}

export default ProfileCard