import Link from 'next/link';

type Props = {
  caption: string;
  allLink: string;
};

export default function HomeCaption({ caption, allLink }: Props) {
  return (
    <div className='mb-3 flex items-baseline'>
      <h2 className='mr-3 text-xl font-bold text-gray-600'>{caption}</h2>
      <Link href={allLink} className='px-3 text-sm font-medium text-gray-500 hover:underline'>
        View all →
      </Link>
    </div>
  );
}
