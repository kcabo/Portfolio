import Image from 'next/image';

import styles from '@/styles/Work.module.css';
import Tag from '@/components/Tag';
import { OpenGithub, OpenHomepage } from '@/components/RichLinkButton';
import WorkCard from '@/components/WorkCard';

import { WorkResponse } from '@/lib/types';

export default function WorkItem({ work }: { work: WorkResponse }) {
  const themeStyle = {
    color: work.theme?.textColor || 'white',
    background: work.theme?.backgroundColor || '#111827',
  };
  return (
    <div className='grid md:px-8 grid-cols-1 gap-10 lg:grid-cols-[1fr,300px]'>
      <div className='pb-6 bg-white md:rounded-lg'>
        <Image
          src={work.coverImage.url}
          alt={work.title}
          width={work.coverImage.width}
          height={work.coverImage.height}
          layout='responsive'
          className='md:rounded-t-lg'
        />
        <div
          className='relative w-4/5 max-w-md px-5 py-4 -mt-10 text-3xl font-bold text-center break-words'
          style={themeStyle}
        >
          {work.title}
        </div>
        <div className='px-8 mt-6 mb-10'>
          <div className='mb-3 text-sm text-gray-500'>{work.date.text}</div>
          <div className='mb-4'>{work.description}</div>
          <div className='flex flex-wrap gap-3'>
            {work.tags.map((tag, index) => (
              <Tag key={index} text={tag} />
            ))}
          </div>
        </div>
        <div className='block w-2/3 mx-auto lg:hidden min-w-[280px] max-w-[400px]'>
          {work.links?.homepage && <OpenHomepage url={work.links.homepage} />}
          {work.links?.github && <OpenGithub url={work.links.github} />}
        </div>
        <article
          dangerouslySetInnerHTML={{
            __html: work.body,
          }}
          className={styles.article}
        />
      </div>
      <div className=''>
        <div className='hidden lg:block'>
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
