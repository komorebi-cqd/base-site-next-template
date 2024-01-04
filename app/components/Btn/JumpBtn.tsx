import React from 'react'

const JumpBtn = ({ locale, children }: { locale: string,children: React.ReactNode }) => {
    return (
        <a href={locale === 'en' ? process.env.NEXT_PUBLIC_JUMP_URL_EN : process.env.NEXT_PUBLIC_JUMP_URL_ZH} target="_blank" className="w-[206px] h-[56px] bg-white rounded leading-[56px] text-primary text-center text-xl font-semibold">
            {children}
        </a>
    )
}

export default JumpBtn;