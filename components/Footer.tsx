import { Github } from '@icons-pack/react-simple-icons';

export default function Footer() {
  return (
    <footer className='py-6 mt-10 bg-gray-200'>
      <div className='container flex justify-between px-8 mx-auto text-gray-500 xl:max-w-screen-lg'>
        <div className='text-sm font-medium '>© 2021 Reo Kanzaki</div>
        <a href='https://github.com/kcabo/Portfolio'>
          <Github size={20} />
        </a>
      </div>
    </footer>
  );
}
