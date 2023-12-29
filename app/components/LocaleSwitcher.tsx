'use client';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useCurrentLocale } from 'next-i18n-router/client';
import i18nConfig from '@/i18nConfig';
import { Menu, Transition } from '@headlessui/react';
import { useIntl } from "react-intl";


export default function LanguageChanger({ fun }: { fun?: () => void }) {
    const router = useRouter();
    const currentPathname = usePathname();
    const currentLocale = useCurrentLocale(i18nConfig);
    const { formatMessage } = useIntl();

    const handleChange = (e: string) => {
        fun?.();
        if (e === currentLocale)  return;
        const newLocale = e;

        // set cookie for next-i18n-router
        const days = 30;
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        const expires = '; expires=' + date.toUTCString();
        document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;
        if (
            currentLocale === i18nConfig.defaultLocale &&
            !i18nConfig.prefixDefault
        ) {
            router.push('/' + newLocale + currentPathname);
        } else {
            if (currentPathname) {
                router.push(
                    currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
                );
            }
        }

        router.refresh();
    };

    return (
        <Menu as="div" className="relative inline-block text-left">
            <div className='flex justify-center items-center text-white text-sm'>
                <span>{formatMessage({ id: "language" })}：</span>
                <Menu.Button>{currentLocale === "zh-CN" ? "简体中文" : "English-en"}</Menu.Button>
            </div>
            <Transition
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >

            </Transition>
            <Menu.Items>
                <Menu.Items className="absolute right-0 mt-2 w-24 origin-top-right divide-y divide-gray-100 overflow-hidden bg-[rgba(41,44,49,0.68)] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] ring-1 ring-black/5 focus:outline-none">
                    <div>
                        <Menu.Item >
                            {({ active }) => (
                                <button
                                    onClick={() => handleChange('zh-CN')}
                                    className={`${active ? 'bg-primary' : ''
                                        } w-full h-6 leading-6 text-xs text-white`}
                                >
                                    简体中文-zh
                                </button>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <button
                                    onClick={() => handleChange('en')}
                                    className={`${active ? 'bg-primary' : ''
                                        } w-full h-6 leading-6 text-xs text-white `}
                                >
                                    English-en
                                </button>
                            )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Menu.Items>
        </Menu>
    );
}
