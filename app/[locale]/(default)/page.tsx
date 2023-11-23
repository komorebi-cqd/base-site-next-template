import getIntl from '../intl';
import LocaleSwitcher from '@/app/components/LocaleSwitcher';
import Link from 'next/link';
import getCurrentUser from "@/app/actions/getCurrentUser";

async function Home({ params: { locale } }: { params: { locale: string } }) {

    return (
        <main className=''>
            {/* 顶部大图 */}
            <div className='home-bg w-full h-[818px] relative pt-60  pl-44'>
                <div className='flex flex-col text-white'>
                    <div className=' w-6 h-[2px] bg-white' />
                    <div className=' text-6xl font-extrabold mt-11 mb-4'>多场景、大数据</div>
                    <div className=' text-3xl font-medium'>全智能金融科技服务商</div>
                    <div className=' cursor-pointer mt-12 border border-white w-[206px] h-[44px] rounded leading-[40px] text-center text-base'>立即体验</div>
                </div>
            </div>
            {/*  */}
            <div className='h-[896px] bg-slate-200'>
                
            </div>
        </main>
    );
}

export default Home;
