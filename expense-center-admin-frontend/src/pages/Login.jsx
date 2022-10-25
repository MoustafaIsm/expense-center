import { useState } from 'react';
import Input from '../components/common/Input';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="bg-light-blue h-screen">
            <nav className="h-20 w-full bg-primary-blue py-4 pl-6">
                <img src="/logo-with-side-text.png" alt="logo" className="h-12" />
            </nav>
            <div className="flex flex-col justify-center items-center h-5/6">
                <div className="bg-white p-8 border border-secondary-blue rounded-2xl w-1/2 flex flex-col gap-4">
                    <p className="text-2xl font-bold"> Login </p>
                    <div className="w-full h-0.5 bg-secondary-blue"></div>
                    <form className='flex flex-col gap-4'>
                        <Input
                            label='Email'
                            type='email'
                            value={email}
                            onChange={setEmail}
                            placeholder='example@company.com' />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login