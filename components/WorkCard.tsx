import Image from 'next/image';
import Link from 'next/link';
import { ExternalLinkIcon } from '@heroicons/react/solid';
import Tag from './Tag';

import { WorkResponse } from '@/lib/types';

export default function WorkCard({ data }: { data: WorkResponse }) {
  return (
    <div className='overflow-hidden bg-white rounded-lg shadow-lg'>
      <Link href={`/works/${encodeURIComponent(data.id)}`}>
        <a className='relative block w-full h-48 border-b border-gray-300'>
          <Image
            src={data.coverImage.url}
            alt={data.title}
            layout='fill'
            objectFit='cover'
          />
        </a>
      </Link>

      <div className='flex flex-col h-[calc(100%-192px)] p-6'>
        <div className='flex items-end mb-3'>
          <Link href={`/works/${encodeURIComponent(data.id)}`}>
            <a>
              <h3 className='mr-3 text-xl font-medium leading-none text-gray-600'>
                {data.title}
              </h3>
            </a>
          </Link>

          {data.links?.homepage && (
            <Link href={data.links.homepage}>
              <a className='block'>
                <ExternalLinkIcon className='w-5 h-5 text-gray-400' />
              </a>
            </Link>
          )}
        </div>
        <Link href={`/works/${encodeURIComponent(data.id)}`}>
          <a className='flex-grow block'>
            <div className='mb-6 text-sm leading-loose text-gray-500 md:text-base'>
              {data.description}
            </div>
          </a>
        </Link>
        <div className='flex flex-wrap gap-3'>
          {data.tags.map((tag, index) => (
            <Tag key={index} text={tag} />
          ))}
        </div>
      </div>
    </div>
  );
}
