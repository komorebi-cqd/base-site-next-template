import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
    return (
        <Link href="/" className="flex justify-center items-center" aria-label="Cruip">
            <Image src="/image/logo.png" width={81} height={76} alt='Risk control' />
            <span className=' text-xs text-white'>Risk control</span>
        </Link>
    )
}
