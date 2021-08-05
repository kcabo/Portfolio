export default function Header() {
  return (
    <header className='py-10'>
      <div className='container mx-auto'>
        <div className='w-10 mx-auto mb-2'>
          <img src='logo.svg' alt='ロゴ' />
        </div>
        <nav className='flex justify-center gap-8 mx-auto'>
          <a className='p-4 text-lg font-bold text-gray-600'>Work</a>
          <a className='p-4 text-lg font-bold text-gray-600'>About</a>
        </nav>
      </div>
    </header>
  );
}
