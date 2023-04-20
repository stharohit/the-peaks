import {LoginFormWrapper} from "./login-form.style";
import {useRouter} from "next/router";
import Image from "next/image";
import Logo from 'src/assets/images/logo.svg';
import React from 'react';

interface FormDataType {[key:string]: FormDataEntryValue}

function LoginForm() {
    const router = useRouter();
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        const responseBody:FormDataType = {};
        e.preventDefault();
        const formData = new FormData(e.currentTarget as HTMLFormElement);
        formData.forEach((value, property:string) => responseBody[property] = value);
        localStorage.setItem('credential', JSON.stringify(responseBody));
        router.push('/home');
    }

    return (
        <LoginFormWrapper>
            <form onSubmit={handleSubmit} className="form-card">
                <div className="input-wrap">
                    <Image
                        priority={true}
                        className="logo"
                        src={Logo}
                        alt="The Peaks"
                    />
                </div>
                <div className="input-wrap">
                    <label>Email</label>
                    <input type="email" name="email"/>
                </div>
                <div className="input-wrap">
                    <label>Password</label>
                    <input type="password" name="password"/>
                </div>
                <div className="input-wrap">
                    <button>Login</button>
                </div>
                <div className="input-wrap">
                    <button>Register</button>
                </div>
            </form>
        </LoginFormWrapper>
    );
}

export default LoginForm;