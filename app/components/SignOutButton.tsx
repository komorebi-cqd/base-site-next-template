'use client';
import { signOut } from 'next-auth/react';
import React from 'react'

const SignOutButton = () => {
    const handleSignOut = async () => {
        await signOut();
    }
    return (
        <button onClick={() => handleSignOut()}>退出登录</button>
    )
}

export default SignOutButton;