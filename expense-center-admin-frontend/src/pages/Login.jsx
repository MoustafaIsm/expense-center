/* eslint-disable react-hooks/rules-of-hooks */
import { useMutation } from '@tanstack/react-query';
import { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../components/common/Input';
import { login } from '../query/auth';

function Login({ changeToken }) {

    const navigate = useNavigate();
    const emailRef = useRef();
    const passwordRef = useRef();
    const [error, setError] = useState('');

    const {
        mutate: useLogin,
        isError,
        error: loginError,
        data: result,
        isSuccess,
    } = useMutation(login);

    const handleSubmit = (e) => {
        e.preventDefault();
        useLogin({ email: emailRef.current.value, password: passwordRef.current.value });
    }



    useEffect(() => {
        if (isSuccess) {
            loginUser(result);
        }
        if (isError) {
            handleLoginError(loginError);
        }
    }, [isSuccess, isError, loginError, result]);

    return (
        <div className="bg-light-blue h-screen">
            <nav className="h-20 w-full bg-primary-blue py-4 pl-6">
                <img src="/logo-with-side-text.png" alt="logo" className="h-12" />
            </nav>
            <div className="flex flex-col justify-center items-center h-5/6">
                <div className="bg-white p-8 border border-secondary-blue rounded-2xl xl:w-2/5 md:w-1/2 w-3/4 flex flex-col gap-4">
                    <p className="text-2xl bold-text"> Login </p>
                    <div className="w-full h-0.5 bg-secondary-blue"></div>
                    <form className='flex flex-col gap-4' onSubmit={(e) => handleSubmit(e)}>
                        <Input
                            label='Email'
                            type='email'
                            inputRef={emailRef}
                            placeholder='example@company.com' />
                        <Input
                            label='Password'
                            type='password'
                            inputRef={passwordRef}
                            placeholder='Enter your password' />
                        <button className='text-white bg-primary-blue uppercase bold-text text-lg rounded-xl py-4 hover:bg-secondary-blue transition-all duration-300'>
                            Log in
                        </button>
                        <p className='text-red-500'>{error}</p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login