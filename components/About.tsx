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
      <div className='max-w-md mx-auto'>
        <div className='relative mx-auto mb-8 overflow-hidden rounded-[63%37%60%40%/50%57%43%50%] w-60 h-60'>
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
          Excelからプログラミングの世界に入りました。
          <br className='hidden md:block' />
          経歴はLinkedInをご参照ください。
        </p>
        <div className='flex justify-center gap-6 mb-10'>
          <a href='https://github.com/kcabo'>
            <Github size={36} color='#181717' />
          </a>
          <a href='https://zenn.dev/kcabo'>
            <Zenn size={36} color='#3EA8FF' />
          </a>
          <a href='https://www.facebook.com/reo.kanzaki.1/'>
            <Facebook size={36} color='#1877F2' />
          </a>
          <a href='https://www.linkedin.com/in/reo-kanzaki/'>
            <Linkedin size={36} color='#0A66C2' />
          </a>
        </div>
        <div className='space-y-10'>
          <div>
            <Caption text='Skills' />
            <p>TypeScriptとPythonが好きです</p>
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
            <p>メッセージは上記のSNSからお願いします</p>
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
