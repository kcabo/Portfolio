import Link from 'next/link';

type Props = {
  caption: string;
  allLink: string;
};

export default function HomeCaption({ caption, allLink }: Props) {
  return (
    <div className='flex items-baseline mb-3'>
      <h2 className='mr-3 text-xl font-bold text-gray-600'>{caption}</h2>
      <Link href={allLink}>
        <a className='px-3 text-sm font-medium text-gray-500 hover:underline'>
          View all →
        </a>
      </Link>
    </div>
  );
}
