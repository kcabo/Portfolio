import Link from 'next/link';

export default function PreviewAlert() {
  return (
    <div className='flex items-center justify-between max-w-screen-sm px-8 py-4 mx-auto mb-6 bg-red-200 border-2 border-red-600 rounded-lg'>
      <div className='text-lg font-bold text-red-600'>
        現在プレビューモードで閲覧しています。
      </div>
      <Link href='/api/clear-cache'>
        <a className='px-8 py-3 overflow-hidden font-bold text-gray-500 bg-white border border-gray-200 rounded-md'>
          プレビューモードを抜ける
        </a>
      </Link>
    </div>
  );
}
