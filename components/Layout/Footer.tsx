import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='mt-20 bg-gray-800 pt-12 pb-8'>
      <div className='mx-auto text-gray-300'>
        <nav className='flex flex-col justify-center gap-5 text-center md:flex-row'>
          <Link href='/works'>Works</Link>
          <div className='hidden font-bold opacity-80 md:block'>・</div>
          <Link href='/about'>About</Link>
          <div className='hidden font-bold opacity-80 md:block'>・</div>
          <Link href='/logs'>Logs</Link>
          <div className='hidden font-bold opacity-80 md:block'>・</div>
          <Link href='/privacy'>Privacy Policy</Link>
          <div className='hidden font-bold opacity-80 md:block'>・</div>
          <a href='/CREDITS.html'>Credits</a>
        </nav>
        <div className='mt-12 mb-8 h-px w-full bg-white opacity-30'></div>
        <div className='mb-2 text-center text-sm'>© 2025 Reo Kanzaki</div>
        <div className='text-center text-sm'>
          The source code of this blog is available at{' '}
          <a href='https://github.com/kcabo/Portfolio' className='underline' target='_blank' rel='noopener noreferrer'>
            GitHub
          </a>
          .
        </div>
      </div>
    </footer>
  );
}
