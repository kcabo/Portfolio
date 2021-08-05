import Link from 'next/link';

type Props = {
  caption: string;
  allLink: string;
};

export default function HomeCaption({ caption, allLink }: Props) {
  return (
    <div className='flex items-baseline mb-3'>
      <h2 className='mr-5 text-xl font-medium text-gray-600'>{caption}</h2>
      <Link href={allLink}>
        <a className='text-sm font-medium text-gray-400 hover:underline'>
          View all →
        </a>
      </Link>
    </div>
  );
}
