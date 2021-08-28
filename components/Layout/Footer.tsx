import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='py-12 mt-20 bg-gray-800'>
      <div className='container px-8 mx-auto text-gray-400 xl:max-w-screen-lg'>
        <nav className='flex flex-col justify-center gap-5 text-center md:flex-row'>
          <Link href='/works'>
            <a>Works</a>
          </Link>
          <div className='hidden font-bold opacity-80 md:block'>・</div>
          <Link href='/about'>
            <a>About</a>
          </Link>
          <div className='hidden font-bold opacity-80 md:block'>・</div>
          <Link href='/logs'>
            <a>Logs</a>
          </Link>
          <div className='hidden font-bold opacity-80 md:block'>・</div>
          <Link href='/privacy'>
            <a>Privacy Policy</a>
          </Link>
        </nav>
        <div className='w-full h-px mt-12 mb-8 bg-white opacity-30'></div>
        <div className='mb-2 text-sm text-center'>© 2021 Reo Kanzaki</div>
        <div className='text-sm text-center'>
          The source code of this blog is available at{' '}
          <a
            href='https://github.com/kcabo/Portfolio'
            className='underline'
            target='_blank'
            rel='noopener noreferrer'
          >
            GitHub
          </a>
          .
        </div>
      </div>
    </footer>
  );
}
