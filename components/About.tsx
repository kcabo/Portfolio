import Image from 'next/image';

import {
  Linkedin,
  Github,
  Facebook,
  Zenn,
} from '@icons-pack/react-simple-icons';

export default function About() {
  return (
    <div className='px-10 bg-white py-14 md:rounded-lg'>
      <div className='max-w-xl mx-auto'>
        <div className='relative mx-auto mb-8 overflow-hidden rounded-[37%63%30%70%/55%52%48%45%] w-60 h-60'>
          <Image
            src='/me.webp'
            layout='fill'
            objectFit='cover'
            alt='神崎伶央'
          />
        </div>
        <h1 className='mb-6 text-2xl font-bold tracking-wider text-center text-gray-600'>
          神崎 伶央
        </h1>
        <p className='mb-10 text-lg text-center text-gray-600'>
          TSを書きます。前はPython、その前はVBAで遊んでいました。
          <br className='hidden md:block' />
          たまに泳ぎます。そんなに速くないです。
        </p>
        <SocialLinks />
        <div>
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
            <p className='py-1 text-sm text-gray-500'>
              ※
              なにかしらのプロジェクトで活用したことのある言語・フレームワーク・ツールなど
            </p>
          </div>
          <div>
            <Caption text='Qualifications' />
            <p>基本情報処理技術者・応用情報処理技術者・TOEIC920</p>
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
                className='inline-block ml-1'
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
    <div className='flex items-center mb-2'>
      <h2 className='mr-4 text-gray-500'>{text}</h2>
      <div className='w-full h-px bg-gray-400'></div>
    </div>
  );
}

function SocialLinks() {
  return (
    <div className='flex justify-center gap-6 mb-10 md:gap-8'>
      <a
        href='https://github.com/kcabo'
        target='_blank'
        rel='noopener noreferrer'
      >
        <Github size={36} color='#181717' />
      </a>
      <a
        href='https://zenn.dev/kcabo'
        target='_blank'
        rel='noopener noreferrer'
      >
        <Zenn size={36} color='#3EA8FF' />
      </a>
      <a
        href='https://www.facebook.com/reo.kanzaki.1/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <Facebook size={36} color='#1877F2' />
      </a>
      <a
        href='https://www.linkedin.com/in/reo-kanzaki/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <Linkedin size={36} color='#0A66C2' />
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
      <img
        src='https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=fff&style=flat'
        alt='Python'
      />
      <img
        src='https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000&style=flat'
        alt='JavaScript'
      />
      <img
        src='https://img.shields.io/badge/VBA-217346?logo=microsoftexcel&logoColor=fff&style=flat'
        alt='VBA'
      />
      <img
        src='https://img.shields.io/badge/GAS-34A853?logo=googlesheets&logoColor=fff&style=flat'
        alt='GAS'
      />
      <img
        src='https://img.shields.io/badge/Vue.js-4FC08D?logo=vuedotjs&logoColor=fff&style=flat'
        alt='Vue.js'
      />
      <img
        src='https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=000&style=flat'
        alt='React'
      />
      <img
        src='https://img.shields.io/badge/Next.js-000?logo=nextdotjs&logoColor=fff&style=flat'
        alt='Next.js'
      />
      <img
        src='https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=fff&style=flat'
        alt='Vite'
      />
      <img
        src='https://img.shields.io/badge/Sass-C69?logo=sass&logoColor=fff&style=flat'
        alt='Sass'
      />
      <img
        src='https://img.shields.io/badge/Tailwind%20CSS-38B2AC?logo=tailwindcss&logoColor=fff&style=flat'
        alt='Tailwind CSS'
      />
      <img
        src='https://img.shields.io/badge/webpack-8DD6F9?logo=webpack&logoColor=000&style=flat'
        alt='webpack'
      />
      <img
        src='https://img.shields.io/badge/Flask-000?logo=flask&logoColor=fff&style=flat'
        alt='Flask'
      />
      <img
        src='https://img.shields.io/badge/Beautiful%20Soup-000?logo=python&logoColor=fff&style=flat'
        alt='Beautiful Soup'
      />
      <img
        src='https://img.shields.io/badge/SQLAlchemy-d71f00?logo=python&logoColor=fff&style=flat'
        alt='SQLAlchemy'
      />
      <img
        src='https://img.shields.io/badge/Jinja-B41717?logo=jinja&logoColor=fff&style=flat'
        alt='Jinja'
      />
      <img
        src='https://img.shields.io/badge/matplotlib-11557c?logo=python&logoColor=fff&style=flat'
        alt='matplotlib'
      />
      <img
        src='https://img.shields.io/badge/pandas-150458?logo=pandas&logoColor=fff&style=flat'
        alt='pandas'
      />
      <img
        src='https://img.shields.io/badge/Puppeteer-40B5A4?logo=puppeteer&logoColor=fff&style=flat'
        alt='Puppeteer'
      />
      <img
        src='https://img.shields.io/badge/Redis-DC382D?logo=redis&logoColor=fff&style=flat'
        alt='Redis'
      />
      <img
        src='https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql&logoColor=fff&style=flat'
        alt='PostgreSQL'
      />
      <img
        src='https://img.shields.io/badge/GitHub%20API-181717?logo=github&logoColor=fff&style=flat'
        alt='GitHub API'
      />
      <img
        src='https://img.shields.io/badge/LINE%20API-00C300?logo=line&logoColor=fff&style=flat'
        alt='LINE API'
      />
      <img
        src='https://img.shields.io/badge/Vercel-000?logo=vercel&logoColor=fff&style=flat'
        alt='Vercel'
      />
      <img
        src='https://img.shields.io/badge/Heroku-430098?logo=heroku&logoColor=fff&style=flat'
        alt='Heroku'
      />
      <img
        src='https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=fff&style=flat'
        alt='Docker'
      />
      <img
        src='https://img.shields.io/badge/VS%20Code-007ACC?logo=visualstudiocode&logoColor=fff&style=flat'
        alt='VS Code'
      />
      <img
        src='https://img.shields.io/badge/Atom-66595C?logo=atom&logoColor=fff&style=flat'
        alt='Atom'
      />
      <img
        src='https://img.shields.io/badge/Figma-F24E1E?logo=figma&logoColor=fff&style=flat'
        alt='Figma'
      />
      <img
        src='https://img.shields.io/badge/Postman-FF6C37?logo=postman&logoColor=fff&style=flat'
        alt='Postman'
      />
      <img
        src='https://img.shields.io/badge/Git-F05032?logo=git&logoColor=fff&style=flat'
        alt='Git'
      />
      <img
        src='https://img.shields.io/badge/Debian-A81D33?logo=debian&logoColor=fff&style=flat'
        alt='Debian'
      />
      <img
        src='https://img.shields.io/badge/Windows-0078D6?logo=windows&logoColor=fff&style=flat'
        alt='Windows'
      />
    </div>
  );
}
