import { MdEmail } from 'react-icons/md';
import { AiFillLock } from 'react-icons/ai';
import { BiArrowBack, BiSolidUser } from 'react-icons/bi';

import facebookLogo from '../assets/social/facebook.png';
import googleLogo from '../assets/social/google.png';
import twitterLogo from '../assets/social/twitter.png';

import { useNavigate } from 'react-router-dom';

export default function Register() {
    const navigate = useNavigate();

    return (
        <div className="mt-16 text-center">
            <div onClick={() => navigate('/login')} className="top-2 left-3 w-9 h-9 absolute bg-blue-600 rounded-lg flex items-center justify-center cursor-pointer">
                <BiArrowBack className="text-white" />
            </div>
            <div>
                <div className='text-blue-600 text-3xl font-title'>TASK MANAGEMENT</div>
                <div className='mt-1 text-neutral-400 font-medium'>Web App</div>
            </div>
            <div className='mt-16 p-3 text-sm text-zinc-700 font-medium'>
                <div className='mb-5'>Create your account</div>
                <div className='mb-5 flex'>
                    <div className='w-12 h-12 flex place-items-center rounded-lg rounded-r-none bg-blue-600 text-center'>
                        <BiSolidUser className='w-4 h-4 text-white m-auto' />
                    </div>
                    <input className='grow p-4 h-12 text-xs font-normal outline-none shadow border border-blue-600 border-opacity-10 rounded-lg rounded-l-none' type="text" placeholder="Username" />
                </div>
                <div className='mb-5 flex'>
                    <div className='w-12 h-12 flex place-items-center rounded-lg rounded-r-none bg-blue-600 text-center'>
                        <MdEmail className='w-4 h-4 text-white m-auto' />
                    </div>
                    <input className='grow p-4 h-12 text-xs font-normal outline-none shadow border border-blue-600 border-opacity-10 rounded-lg rounded-l-none' type="email" placeholder="Email" />
                </div>
                <div className='mb-5 flex'>
                    <div className='w-12 h-12 flex place-items-center rounded-lg rounded-r-none bg-blue-600 text-center'>
                        <AiFillLock className='w-4 h-4 text-white m-auto' />
                    </div>
                    <input className='grow p-4 h-12 text-xs font-normal outline-none shadow border border-blue-600 border-opacity-10 rounded-lg rounded-l-none' type="password" placeholder="Password" />
                </div>
                <div className='mb-5 flex'>
                    <div className='w-12 h-12 flex place-items-center rounded-lg rounded-r-none bg-blue-600 text-center'>
                        <AiFillLock className='w-4 h-4 text-white m-auto' />
                    </div>
                    <input className='grow p-4 h-12 text-xs font-normal outline-none shadow border border-blue-600 border-opacity-10 rounded-lg rounded-l-none' type="password" placeholder="Confirm Password" />
                </div>
                <div className="w-full h-12 px-10 py-3.5 bg-blue-600 rounded-lg shadow mt-6">
                    <div className="text-white text-sm font-normal leading-tight">Register</div>
                </div>
                <div className='flex items-center gap-2 justify-center mt-9 mb-5'>
                    <div className="w-2.5 h-px border border-blue-600"></div>
                    <div className="text-zinc-700 text-sm font-normal leading-tight">Or Register with</div>
                    <div className="w-2.5 h-px border border-blue-600"></div>
                </div>
                <div className='flex justify-center gap-10 px-10 mb-3'>
                    <div className="w-16 h-16 p-5 rounded-lg border border-blue-600 border-opacity-10 justify-center items-center gap-2.5 inline-flex">
                        <img className="h-8 object-contain" src={googleLogo} />
                    </div>
                    <div className="w-16 h-16 p-5 rounded-lg border border-blue-600 border-opacity-10 justify-center items-center gap-2.5 inline-flex">
                        <img className="h-6 object-contain" src={facebookLogo} />
                    </div>
                    <div className="w-16 h-16 p-5 rounded-lg border border-blue-600 border-opacity-10 justify-center items-center gap-2.5 inline-flex">
                        <img className="h-8 object-contain" src={twitterLogo} />
                    </div>
                </div>
            </div>
        </div>
    )
} 