import Link from 'next/link';

export default function PreviewAlert() {
  return (
    <div className='mx-auto mb-6 flex max-w-screen-sm items-center justify-between rounded-lg border-2 border-red-600 bg-red-200 px-8 py-4'>
      <div className='text-lg font-bold text-red-600'>現在プレビューモードで閲覧しています。</div>
      <Link
        href='/api/clear-cache'
        className='overflow-hidden rounded-md border border-gray-200 bg-white px-8 py-3 font-bold text-gray-500'
      >
        プレビューモードを抜ける
      </Link>
    </div>
  );
}
