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
            alt='サムネイル'
            layout='fill'
            objectFit='cover'
          />
        </a>
      </Link>

      <div className='flex flex-col h-[calc(100%-192px)] px-5 py-6'>
        <div className='flex mb-2 align-baseline'>
          <Link href={`/works/${encodeURIComponent(data.id)}`}>
            <a>
              <h4 className='mr-2 text-xl font-medium text-gray-600'>
                {data.title}
              </h4>
            </a>
          </Link>

          {data.links?.homepage && (
            <Link href={data.links.homepage}>
              <a className='px-1 pt-1'>
                <ExternalLinkIcon className='w-5 h-5 text-gray-400' />
              </a>
            </Link>
          )}
        </div>
        <Link href={`/works/${encodeURIComponent(data.id)}`}>
          <a className='flex-grow block'>
            <div className='mb-6 text-gray-500'>{data.description}</div>
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
