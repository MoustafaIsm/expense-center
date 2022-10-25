import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../components/common/Input';

function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('token', '12345');
        navigate('/');
    }

    return (
        <div className="bg-light-blue h-screen">
            <nav className="h-20 w-full bg-primary-blue py-4 pl-6">
                <img src="/logo-with-side-text.png" alt="logo" className="h-12" />
            </nav>
            <div className="flex flex-col justify-center items-center h-5/6">
                <div className="bg-white p-8 border border-secondary-blue rounded-2xl w-2/5 flex flex-col gap-4">
                    <p className="text-2xl bold-text"> Login </p>
                    <div className="w-full h-0.5 bg-secondary-blue"></div>
                    <form className='flex flex-col gap-4' onSubmit={(e) => handleSubmit(e)}>
                        <Input
                            label='Email'
                            type='email'
                            value={email}
                            onChange={setEmail}
                            placeholder='example@company.com' />
                        <Input
                            label='Password'
                            type='password'
                            value={password}
                            onChange={setPassword}
                            placeholder='Enter your password' />
                        <button className='text-white bg-primary-blue uppercase bold-text text-lg rounded-xl py-4 hover:bg-secondary-blue transition-all duration-300'>
                            Log in
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login