import Image from 'next/image';

import { SiGithub, SiFacebook, SiZenn } from '@icons-pack/react-simple-icons';

export default function About() {
  return (
    <main className='container mx-auto xl:max-w-screen-lg'>
      <div className='bg-white px-8 py-14 md:rounded-lg'>
        <div className='mx-auto max-w-2xl'>
          <div className='relative mx-auto mb-8 h-60 w-60 overflow-hidden rounded-[37%63%30%70%/55%52%48%45%]'>
            <Image src='/me.webp' fill className='object-cover' alt='神崎伶央' />
          </div>
          <h1 className='mb-6 text-center text-2xl font-bold tracking-wider text-gray-600'>Reo Kanzaki / 神崎 伶央</h1>
          <div className='mb-8 text-left text-lg text-gray-600 md:text-center'>
            <p className=''>
              プロダクト設計・UIデザインから、フロントエンド、バックエンド、
              <br className='hidden md:inline' />
              クラウドインフラの設計・開発まで、Webアプリ開発に幅広く対応可能です。
            </p>
            <p className='mt-2'>パフォーマンスとスケーラビリティを重視したアプリケーション開発が得意です。</p>
            <p className='mt-2'>開発実績多数。スタートアップ企業からの受注経験あり。</p>
            <p className='colored-link mt-2'>
              ご連絡は
              <a href='https://www.linkedin.com/in/reo-kanzaki/' target='_blank' rel='noopener noreferrer'>
                LinkedIn
              </a>
              からお願いします。
            </p>
            <p className='mt-2'>泳げます。遅いです。</p>
          </div>
          <SocialLinks />
          <div className='my-4'>
            <Image
              src='https://github-contributions-api.deno.dev/kcabo.svg?no-total=true&no-legend=true&scheme=random'
              alt='Contributions Calendar'
              className='mx-auto w-auto'
              width={0}
              height={0}
              unoptimized
            />
          </div>
          <div className='space-y-10'>
            <div>
              <Caption text='Skills' />
              <p className='pb-2 text-sm text-gray-500'>開発経験のある言語・フレームワーク・ツールなど</p>
              <Badges />
            </div>
            <div>
              <Caption text='Qualifications' />
              <ul className='list-disc pl-6'>
                <li>基本情報処理技術者</li>
                <li>応用情報処理技術者</li>
                <li>情報処理安全確保支援士</li>
                <li>TOEIC 920</li>
              </ul>
            </div>
            <div>
              <Caption text='Hobbies' />
              <ul className='list-disc pl-6'>
                <li>競技麻雀</li>
                <li>スキー</li>
                <li>
                  エヴァ
                  <Image
                    src='https://abs.twimg.com/hashflags/Amazon_EVANGELION_July_2021/Amazon_EVANGELION_July_2021.png'
                    alt='初号機'
                    width={20}
                    height={20}
                    className='ml-1 inline-block'
                    unoptimized
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function Caption({ text }: { text: string }) {
  return (
    <div className='mb-2 flex items-center'>
      <h2 className='mr-4 text-gray-500'>{text}</h2>
      <div className='h-px w-full bg-gray-400'></div>
    </div>
  );
}

function SocialLinks() {
  return (
    <div className='flex justify-center gap-6 md:gap-8'>
      <a href='https://github.com/kcabo' target='_blank' rel='noopener noreferrer'>
        <SiGithub size={36} color='#181717' />
      </a>
      <a href='https://zenn.dev/kcabo' target='_blank' rel='noopener noreferrer'>
        <SiZenn size={36} color='#3EA8FF' />
      </a>
      <a href='https://www.facebook.com/reo.kanzaki.1/' target='_blank' rel='noopener noreferrer'>
        <SiFacebook size={36} color='#1877F2' />
      </a>
      <a href='https://www.linkedin.com/in/reo-kanzaki/' target='_blank' rel='noopener noreferrer'>
        <div className='flex h-9 w-9 items-center justify-center rounded-sm bg-[#0A66C2]'>
          <span className='text-2xl leading-none text-white [text-shadow:1px_1px_0_white,-1px_-1px_0_white,1px_-1px_0_white,-1px_1px_0_white]'>
            in
          </span>
        </div>
      </a>
    </div>
  );
}

function Badges() {
  const badge_urls = [
    'https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff&style=flat',
    'https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=fff&style=flat',
    'https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000&style=flat',
    'https://img.shields.io/badge/VBA-217346?logo=microsoftexcel&logoColor=fff&style=flat',
    'https://img.shields.io/badge/GAS-34A853?logo=googlesheets&logoColor=fff&style=flat',
    'https://img.shields.io/badge/Svelte-FF3E00?logo=svelte&logoColor=fff&style=flat',
    'https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=000&style=flat',
    'https://img.shields.io/badge/Next.js-000?logo=nextdotjs&logoColor=fff&style=flat',
    'https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=fff&style=flat',
    'https://img.shields.io/badge/Vue.js-4FC08D?logo=vuedotjs&logoColor=fff&style=flat',
    'https://img.shields.io/badge/Tailwind%20CSS-38B2AC?logo=tailwindcss&logoColor=fff&style=flat',
    'https://img.shields.io/badge/FastAPI-009688?logo=fastapi&logoColor=fff&style=flat',
    'https://img.shields.io/badge/Flask-000?logo=flask&logoColor=fff&style=flat',
    'https://img.shields.io/badge/Puppeteer-40B5A4?logo=puppeteer&logoColor=fff&style=flat',
    'https://img.shields.io/badge/Qdrant-DC244C?style=flat',
    'https://img.shields.io/badge/Supabase-3FCF8E?logo=supabase&logoColor=fff&style=flat',
    'https://img.shields.io/badge/Redis-DC382D?logo=redis&logoColor=fff&style=flat',
    'https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql&logoColor=fff&style=flat',
    'https://img.shields.io/badge/AWS%20Amplify-FF9900?logo=awsamplify&logoColor=fff&style=flat',
    'https://img.shields.io/badge/AWS%20Lambda-FF9900?logo=awslambda&logoColor=fff&style=flat',
    'https://img.shields.io/badge/RDS-527FFF?logo=amazonrds&logoColor=fff&style=flat',
    'https://img.shields.io/badge/DynamoDB-4053D6?logo=amazondynamodb&logoColor=fff&style=flat',
    'https://img.shields.io/badge/S3-569A31?logo=amazons3&logoColor=fff&style=flat',
    'https://img.shields.io/badge/LINE%20API-00C300?logo=line&logoColor=fff&style=flat',
    'https://img.shields.io/badge/Cloudflare-F38020?logo=cloudflare&logoColor=fff&style=flat',
    'https://img.shields.io/badge/Vercel-000?logo=vercel&logoColor=fff&style=flat',
    'https://img.shields.io/badge/Heroku-430098?logo=heroku&logoColor=fff&style=flat',
    'https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=fff&style=flat',
    'https://img.shields.io/badge/Figma-F24E1E?logo=figma&logoColor=fff&style=flat',
    'https://img.shields.io/badge/Ubuntu-E95420?logo=ubuntu&logoColor=fff&style=flat',
    'https://img.shields.io/badge/Raspberry%20Pi-A22846?logo=raspberrypi&logoColor=fff&style=flat',
  ];

  return (
    <div className='flex flex-wrap gap-1 font-bold'>
      {badge_urls.map((url, index) => (
        <Image key={index} src={url} alt='Badge' width={0} height={0} className='h-6 w-auto' />
      ))}
    </div>
  );
}
