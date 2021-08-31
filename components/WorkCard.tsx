import Image from 'next/image';
import Link from 'next/link';
import { ExternalLinkIcon } from '@heroicons/react/solid';
import Tag from './Tag';

import { WorkResponse } from '@/lib/types';

export default function WorkCard({ data }: { data: WorkResponse }) {
  return (
    <div className='overflow-hidden bg-white rounded-lg shadow-lg'>
      <Link href={`/works/${encodeURIComponent(data.id)}`}>
        <a className='relative block w-full border-b border-gray-300 h-44'>
          <Image
            src={data.coverImage.url}
            alt={data.title}
            layout='fill'
            objectFit='cover'
          />
        </a>
      </Link>

      <div className='flex flex-col px-6 py-4'>
        <div className='flex items-end mb-1'>
          <Link href={`/works/${encodeURIComponent(data.id)}`}>
            <a className='mr-1'>
              <h3 className='text-lg font-medium leading-9 text-gray-600 md:text-xl md:leading-9'>
                {data.title}
              </h3>
            </a>
          </Link>

          {data.links?.homepage && (
            <Link href={data.links.homepage}>
              <a
                className='block p-2'
                aria-label='Open homepage'
                target='_blank'
                rel='noopener noreferrer'
              >
                <ExternalLinkIcon className='w-5 h-5 text-gray-400' />
              </a>
            </Link>
          )}
        </div>
        <Link href={`/works/${encodeURIComponent(data.id)}`}>
          <a className='flex-grow block'>
            <div className='mb-5 text-sm text-gray-500 md:text-base'>
              {data.description}
            </div>
          </a>
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
