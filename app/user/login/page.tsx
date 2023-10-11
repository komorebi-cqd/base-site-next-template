'use client'
import React, { useState } from 'react'
import Input from '@/app/components/Inputs/Input'
import Button from '@/app/components/Button';
import { FieldValues, useForm, SubmitHandler } from 'react-hook-form';
import { getCsrfToken, signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import useSWR from "swr";
import { fetcher } from '@/lib/axios';


const Login = () => {
    const { data, error } = useSWR(['/apply/list', 'post' as const, {page: 1, size: 10}],(par) => fetcher(...par));
    console.log(data, error,"data, error---/apply/list");
    
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FieldValues>({
        defaultValues: {
            username: '',
            email: '',
            password: ''
        }
    });

    getCsrfToken().then(res => {
        console.log(res, "getCsrfToken---");

    })

    const onSumbit: SubmitHandler<FieldValues> = data => {
        console.log(data, "2222222222");

        setIsLoading(true);

        const loginToast = toast.loading("登录中");
        signIn('credentials', {
            ...data,
            redirect: false,
            callbackUrl: "/"
        }).then(callback => {
            console.log(callback, "callback----");
            setIsLoading(false);
            if (callback?.ok) {
                console.log(callback);
                toast.success('登录成功', {
                    id: loginToast,
                });
                router.refresh();
                router.replace("/");
            }
            if (callback?.error) {
                toast.error('很抱歉，用户账号错误，或您输入的密码错误。忘记密码了？', {
                    id: loginToast,
                });

            }
        })
    };

    const handleLogin = () => {
        handleSubmit(onSumbit)();
    }


    return (
        <div>
            <div className="w-full h-full mx-auto my-6 md:w-4/6 lg:w-3/6 xl:w-2/5 lg:h-auto md:h-auto">
                <Input id='username' label='Name' disabled={isLoading} register={register} errors={errors} required />
                <Input id='password' label='Password' type='password' disabled={isLoading} register={register} errors={errors} required />
                <div className="flex flex-col gap-4 mt-3">
                    <hr />
                    <Button outline label='登录' onClick={() => handleLogin()} />
                    <div className="mt-4 text-center text-neutral-500 font-PHLight">
                        <div className="flex flex-row items-center justify-center gap-2">
                            <div>已经有账号了？</div>
                            <div className='cursor-pointer hover:underline text-neutral-800'>去登录</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login;

