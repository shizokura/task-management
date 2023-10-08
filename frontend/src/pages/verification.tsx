import { BiArrowBack } from 'react-icons/bi';
import verifyImage from '../assets/verify.png';
import { useNavigate } from 'react-router-dom';
import { useRef, RefObject, KeyboardEvent, useState } from 'react';

export default function Register() {
    const navigate = useNavigate();

    const input1 = useRef<HTMLInputElement>(null);
    const input2 = useRef<HTMLInputElement>(null);
    const input3 = useRef<HTMLInputElement>(null);
    const input4 = useRef<HTMLInputElement>(null);

    const [isDone, setIsDone] = useState<boolean>(false);

    const onChangeInput = (
        currentRef: RefObject<HTMLInputElement>,
        nextInput: RefObject<HTMLInputElement> | null,
        event: KeyboardEvent<HTMLInputElement> | null = null
    ) => {
        if (currentRef.current) {
            if (event && event.key === 'Backspace' && !currentRef.current.value) {
                // Backspace key pressed and input is empty
                if (nextInput && nextInput.current) {
                    nextInput.current.focus();
                }
            } else if (currentRef.current.value.length === 1 && nextInput && nextInput.current) {
                // Move to the next input when a character is entered
                nextInput.current.focus();
            }
        }
    };

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
                <div className='mb-5'>Verify Account</div>
                {!isDone && (
                    <>
                        <div className='mt-6 mb-6'>
                            <img className='mx-auto' src={verifyImage} alt="Verification" />
                        </div>
                        <div className='text-xs font-medium text-zinc-700 w-56 mx-auto'>Please enter the verification number we send to your email</div>
                        <div className='flex gap-[9px] justify-center mt-16'>
                            <input
                                onChange={(_) => onChangeInput(input1, input2)}
                                onKeyDown={(event) => {
                                    if (event.key === 'Backspace') {
                                        setTimeout(() => {
                                            onChangeInput(input1, null, event);
                                        });
                                    }
                                }}
                                ref={input1}
                                className='w-[50px] border-blue-600 border-b-[3px] outline-none text-center text-2xl font-semibold'
                                type="text"
                                minLength={1}
                                maxLength={1}
                            />
                            <input
                                onChange={(_) => onChangeInput(input2, input3)}
                                onKeyDown={(event) => {
                                    if (event.key === 'Backspace') {
                                        setTimeout(() => {
                                            onChangeInput(input2, input1, event);
                                        });
                                    }
                                }}
                                ref={input2}
                                className='w-[50px] border-blue-600 border-b-[3px] outline-none text-center text-2xl font-semibold'
                                type="text"
                                minLength={1}
                                maxLength={1}
                            />
                            <input
                                onChange={(_) => onChangeInput(input3, input4)}
                                onKeyDown={(event) => {
                                    if (event.key === 'Backspace') {
                                        setTimeout(() => {
                                            onChangeInput(input3, input2, event);
                                        });
                                    }
                                }}
                                ref={input3}
                                className='w-[50px] border-blue-600 border-b-[3px] outline-none text-center text-2xl font-semibold'
                                type="text"
                                minLength={1}
                                maxLength={1}
                            />
                            <input
                                onChange={(_) => onChangeInput(input4, null)}
                                onKeyDown={(event) => {
                                    if (event.key === 'Backspace') {
                                        setTimeout(() => {
                                            onChangeInput(input4, input3, event);
                                        });
                                    }
                                }}
                                ref={input4}
                                className='w-[50px] border-blue-600 border-b-[3px] outline-none text-center text-2xl font-semibold'
                                type="text"
                                minLength={1}
                                maxLength={1}
                            />
                        </div>
                        <div className='text-[10px] text-neutral-400 mt-[10px] mb-16'>Don't receive a code? <a className='font-normal text-blue-600' href="javascript:">Resend</a></div>
                        <div onClick={() => { setIsDone(true) }} className="w-full h-12 px-10 py-3.5 bg-blue-600 rounded-lg shadow mt-6 cursor-pointer">
                            <div className="text-white text-sm font-normal leading-tight">Confirm</div>
                        </div>
                    </>
                )}
                {isDone && (
                    <>
                        <div className='mt-6 mb-6'>
                            <img className='mx-auto' src={verifyImage} alt="Verification" />
                        </div>
                        <div className='text-xs font-medium text-zinc-700 w-56 mx-auto'>Please enter the verification number we send to your email</div>
                        <div className='text-[10px] text-neutral-400 mt-[10px] mb-16'>Don't receive a code? <a className='font-normal text-blue-600' href="javascript:">Resend</a></div>
                        <div onClick={() => { setIsDone(true) }} className="w-full h-12 px-10 py-3.5 bg-blue-600 rounded-lg shadow mt-6 cursor-pointer">
                            <div className="text-white text-sm font-normal leading-tight">Confirm</div>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}
