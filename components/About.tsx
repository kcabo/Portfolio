import Image from 'next/image';

import { SiGithub, SiFacebook, SiZenn } from '@icons-pack/react-simple-icons';

export default function About() {
  return (
    <div className='bg-white px-10 py-14 md:rounded-lg'>
      <div className='mx-auto max-w-xl'>
        <div className='relative mx-auto mb-8 h-60 w-60 overflow-hidden rounded-[37%63%30%70%/55%52%48%45%]'>
          <Image src='/me.webp' fill className='object-cover' alt='神崎伶央' />
        </div>
        <h1 className='mb-6 text-center text-2xl font-bold tracking-wider text-gray-600'>神崎 伶央</h1>
        <p className='mb-10 text-center text-lg text-gray-600'>
          TSを書きます。前はPython、その前はVBAで遊んでいました。
          <br className='hidden md:block' />
          たまに泳ぎます。そんなに速くないです。
        </p>
        <SocialLinks />
        <div className='md:h-52'>
          <img
            src='https://raw.githubusercontent.com/kcabo/kcabo/main/github-metrics.svg'
            alt='Contributions Calendar'
            className='mx-auto'
          />
        </div>
        <div className='space-y-10'>
          <div>
            <Caption text='Skills' />
            <Badges />
            <p className='py-1 text-sm text-gray-500'>※ ちょっと使える言語・フレームワーク・ツールなど</p>
          </div>
          <div>
            <Caption text='Qualifications' />
            <p>基本情報処理技術者・応用情報処理技術者・情報処理安全確保支援士合格・TOEIC920</p>
          </div>
          <div>
            <Caption text='Hobbies' />
            <p>
              水泳・スキー・サウナ・エヴァ
              <img
                src='https://abs.twimg.com/hashflags/Amazon_EVANGELION_July_2021/Amazon_EVANGELION_July_2021.png'
                alt='初号機'
                width={20}
                height={20}
                className='ml-1 inline-block'
              />
            </p>
          </div>
          <div>
            <Caption text='Contact' />
            <p>メッセージは上記のSNSからお願いします。</p>
          </div>
        </div>
      </div>
    </div>
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
    <div className='mb-10 flex justify-center gap-6 md:gap-8'>
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
        {/* <Linkedin size={36} color='#0A66C2' /> */}
        <SiFacebook size={36} color='#1877F2' />
      </a>
    </div>
  );
}

function Badges() {
  return (
    <div className='flex flex-wrap gap-1'>
      <img
        src='https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff&style=flat'
        alt='TypeScript'
      />
      <img src='https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=fff&style=flat' alt='Python' />
      <img
        src='https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000&style=flat'
        alt='JavaScript'
      />
      <img src='https://img.shields.io/badge/VBA-217346?logo=microsoftexcel&logoColor=fff&style=flat' alt='VBA' />
      <img src='https://img.shields.io/badge/GAS-34A853?logo=googlesheets&logoColor=fff&style=flat' alt='GAS' />
      <img src='https://img.shields.io/badge/Vue.js-4FC08D?logo=vuedotjs&logoColor=fff&style=flat' alt='Vue.js' />
      <img src='https://img.shields.io/badge/Svelte-FF3E00?logo=svelte&logoColor=fff&style=flat' alt='Svelte' />
      <img src='https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=000&style=flat' alt='React' />
      <img src='https://img.shields.io/badge/Next.js-000?logo=nextdotjs&logoColor=fff&style=flat' alt='Next.js' />
      <img src='https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=fff&style=flat' alt='Vite' />
      <img
        src='https://img.shields.io/badge/Tailwind%20CSS-38B2AC?logo=tailwindcss&logoColor=fff&style=flat'
        alt='Tailwind CSS'
      />
      <img src='https://img.shields.io/badge/Flask-000?logo=flask&logoColor=fff&style=flat' alt='Flask' />
      <img
        src='https://img.shields.io/badge/Puppeteer-40B5A4?logo=puppeteer&logoColor=fff&style=flat'
        alt='Puppeteer'
      />
      <img
        src='https://img.shields.io/badge/Serverless-FD5750?logo=serverless&logoColor=fff&style=flat'
        alt='Serverless'
      />
      <img src='https://img.shields.io/badge/Redis-DC382D?logo=redis&logoColor=fff&style=flat' alt='Redis' />
      <img
        src='https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql&logoColor=fff&style=flat'
        alt='PostgreSQL'
      />
      <img
        src='https://img.shields.io/badge/DynamoDB-4053D6?logo=amazondynamodb&logoColor=fff&style=flat'
        alt='DynamoDB'
      />
      <img src='https://img.shields.io/badge/S3-569A31?logo=amazons3&logoColor=fff&style=flat' alt='S3' />
      <img src='https://img.shields.io/badge/LINE%20API-00C300?logo=line&logoColor=fff&style=flat' alt='LINE API' />
      <img src='https://img.shields.io/badge/Vercel-000?logo=vercel&logoColor=fff&style=flat' alt='Vercel' />
      <img src='https://img.shields.io/badge/Heroku-430098?logo=heroku&logoColor=fff&style=flat' alt='Heroku' />
      <img src='https://img.shields.io/badge/AWS-232F3E?logo=amazonaws&logoColor=fff&style=flat' alt='AWS' />
      <img src='https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=fff&style=flat' alt='Docker' />
      <img
        src='https://img.shields.io/badge/VS%20Code-007ACC?logo=visualstudiocode&logoColor=fff&style=flat'
        alt='VS Code'
      />
      <img src='https://img.shields.io/badge/Figma-F24E1E?logo=figma&logoColor=fff&style=flat' alt='Figma' />
      <img src='https://img.shields.io/badge/Ubuntu-E95420?logo=ubuntu&logoColor=fff&style=flat' alt='Ubuntu' />
    </div>
  );
}
