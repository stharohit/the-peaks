import {useRouter} from "next/router";
import LoginForm from "./LoginForm";
import React, {useEffect} from 'react';

function LoginPage() {
    const router = useRouter();
    useEffect(() => {
        const hasCredential = localStorage.getItem('credential');
        if (hasCredential) router.push('/home');
    }, [])

    return (
        <LoginForm />
    );
}

export default LoginPage;