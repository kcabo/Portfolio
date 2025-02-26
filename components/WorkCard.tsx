import Image from 'next/image';
import Link from 'next/link';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid';

import Tag from './Tag';

import { WorkResponse } from '@/lib/types';

export default function WorkCard({ data }: { data: WorkResponse }) {
  const url = `/works/${encodeURIComponent(data.id)}`;

  return (
    <div className='overflow-hidden rounded-lg bg-white shadow-lg transition lg:hover:-translate-y-2'>
      <Link href={url} className='relative block h-44 w-full border-b border-gray-300'>
        <Image src={data.coverImage.url} alt={data.title} layout='fill' objectFit='cover' />
      </Link>

      <div className='flex flex-col px-6 py-4'>
        <div className='mb-1 flex items-end'>
          <Link href={url} className='mr-1'>
            <h3 className='text-lg leading-9 font-medium text-gray-600 md:text-xl md:leading-9'>{data.title}</h3>
          </Link>

          {data.links?.homepage && (
            <Link
              href={data.links.homepage}
              className='block p-2'
              aria-label='Open homepage'
              target='_blank'
              rel='noopener noreferrer'
            >
              <ArrowTopRightOnSquareIcon className='h-5 w-5 text-gray-400 hover:text-gray-600' />
            </Link>
          )}
        </div>

        <Link href={url}>
          <div className='mb-5 text-sm text-gray-500 md:text-base'>{data.description}</div>
        </Link>

        <div className='flex flex-wrap gap-1.5'>
          {data.tags.map((tag, index) => (
            <Tag key={index} text={tag} />
          ))}
        </div>
      </div>
    </div>
  );
}
