import wizardImage1 from '../assets/wizard/wizard-1.png';
import wizardImage2 from '../assets/wizard/wizard-2.png';
import wizardImage3 from '../assets/wizard/wizard-3.png';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Landing() {
    const [status, setStatus] = useState('splash');
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            setStatus('first');
        }, 1000)
    }, []);

    const nextStep = () => {
        if (status === 'splash') {
            setStatus('first');
        } else if (status === 'first') {
            setStatus('second');
        } else if (status === 'second') {
            setStatus('third');
        } else {
            navigate('/login');
        }
    };

    return (
        <>
            {status === 'splash' ? (
                <div className="flex flex-col items-center justify-center text-center w-full h-screen">
                    <div className="font-title text-3xl text-blue-600">TASK MANAGEMENT</div>
                </div>
            ) : status === 'first' || status === 'second' || status === 'third' ? (
                <div className="flex items-center justify-center w-full h-screen text-center">
                    <div className='absolute top-0 left-0 right-0 px-4 py-5 flex justify-between'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="10" viewBox="0 0 42 10" fill="none">
                            <circle cx="5" cy="5" r="5" fill={status === 'first' ? '#006EE9' : '#EEF5FD'} />
                            <circle cx="21" cy="5" r="5" fill={status === 'second' ? '#006EE9' : '#EEF5FD'} />
                            <circle cx="37" cy="5" r="5" fill={status === 'third' ? '#006EE9' : '#EEF5FD'} />
                        </svg>
                        <div className="text-blue-600 text-xs font-medium cursor-pointer" onClick={() => { navigate('/login') }}>Skip</div>
                    </div>
                    <div className='text-black text-center px-7'>
                        { status === 'first' ? (
                            <>
                                <img className='mx-auto' src={wizardImage1} />
                                <div className='text-base font-medium mt-6'>Easy Time Management</div>
                                <div className='text-sm text-zinc-700 mt-6'>With management based on priority and daily tasks, it will give you convenience in managing and determining the tasks that must be done first</div>
                            </>
                        ) : status === 'second' ? (
                            <>
                                <img className='mx-auto' src={wizardImage2} />
                                <div className='text-base font-medium mt-6'>Increase Work Effectiveness</div>
                                <div className='text-sm text-zinc-700 mt-6'>Time management and the determination of more important tasks will give your job statistics better and always improve</div>
                            </>
                        ) : status === 'third' ? (
                            <>
                                <img className='mx-auto' src={wizardImage3} />
                                <div className='text-base font-medium mt-6'>Reminder Notification</div>
                                <div className='text-sm text-zinc-700 mt-6'>The advantage of this application is that it also provides reminders for you so you don't forget to keep doing your assignments well and according to the time you have set</div>
                            </>
                        ) : (
                            <div>Some error occurred</div>
                        ) }
                    </div>
                    <div className='absolute bottom-0 left-0 right-0 px-4 py-5'>
                        <button onClick={nextStep} className='py-4 px-10 bg-blue-600 rounded-xl w-full text-white'>Get Started</button>
                    </div>
                </div>
            ) : (
                <div>Some error occurred</div>
            )}
        </>
    );
}