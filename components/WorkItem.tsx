import Image from 'next/image';

import styles from '@/styles/Work.module.css';
import Tag from '@/components/Tag';
import { OpenGithub, OpenHomepage } from '@/components/RichLinkButton';
import WorkCard from '@/components/WorkCard';

import { WorkResponse } from '@/lib/types';

export default function WorkItem({ work }: { work: WorkResponse }) {
  return (
    <div className='grid md:px-8 grid-cols-1 gap-10 lg:grid-cols-[1fr,300px]'>
      <div className='pb-10 bg-white md:rounded-lg'>
        <Image
          src={work.coverImage.url}
          alt={work.title}
          width={work.coverImage.width}
          height={work.coverImage.height}
          layout='responsive'
          className='md:rounded-t-lg'
        />
        <div className='px-8 my-6 lg:px-12'>
          <div className='mb-2 text-sm text-gray-600'>{work.date.text}</div>
          <h1 className='mb-3 text-3xl font-bold text-gray-700 md:text-4xl md:mb-4'>
            {work.title}
          </h1>
          <div className='mb-4 text-gray-800'>{work.description}</div>
          <div className='flex flex-wrap gap-2'>
            {work.tags.map((tag, index) => (
              <Tag key={index} text={tag} />
            ))}
          </div>
        </div>
        <div className='flex flex-col items-center justify-center gap-4 mb-8 sm:flex-row lg:hidden'>
          {work.links?.homepage && <OpenHomepage url={work.links.homepage} />}
          {work.links?.github && <OpenGithub url={work.links.github} />}
        </div>
        <article
          dangerouslySetInnerHTML={{
            __html: work.body,
          }}
          className={'colored-link ' + styles.article}
          style={{ '--theme-color': work.themeColor } as any}
        />
      </div>
      <div className=''>
        <div className='hidden mb-10 space-y-4 lg:block'>
          {work.links?.homepage && <OpenHomepage url={work.links.homepage} />}
          {work.links?.github && <OpenGithub url={work.links.github} />}
        </div>
        {work.relatedWorks.length > 0 && (
          <RelatedWorks works={work.relatedWorks} />
        )}
      </div>
    </div>
  );
}

function RelatedWorks({ works }: { works: WorkResponse[] }) {
  return (
    <div className='px-6 md:p-0'>
      <h2 className='mb-6 text-2xl font-bold text-gray-600'>関連する作品</h2>
      <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-1'>
        {works.map((work, index) => (
          <WorkCard key={index} data={work} />
        ))}
      </div>
    </div>
  );
}
