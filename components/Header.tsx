import Link from 'next/link';

export default function Header() {
  return (
    <header className='pt-12 pb-6 md:pb-10'>
      <div className='container mx-auto'>
        <div className='w-10 mx-auto mb-2'>
          <Link href='/'>
            <a>
              <img src='logo.svg' alt='ロゴ' />
            </a>
          </Link>
        </div>
        <nav className='flex justify-center gap-8 mx-auto'>
          <Link href='/works'>
            <a className='p-4 text-lg font-bold text-gray-600'>Work</a>
          </Link>
          <Link href='/about'>
            <a className='p-4 text-lg font-bold text-gray-600'>About</a>
          </Link>
        </nav>
      </div>
    </header>
  );
}
