import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className='pt-12 pb-6 md:pb-10'>
      <div className='container mx-auto'>
        <Link href='/'>
          <a className='block w-10 mx-auto mb-2'>
            <Image src='/logo.svg' alt='kcabo logo' height={40} width={40} />
          </a>
        </Link>
        <nav className='flex justify-center gap-8 mx-auto'>
          <Link href='/works'>
            <a className='p-3 text-lg font-bold text-gray-600'>Work</a>
          </Link>
          <Link href='/about'>
            <a className='p-3 text-lg font-bold text-gray-600'>About</a>
          </Link>
        </nav>
      </div>
    </header>
  );
}
