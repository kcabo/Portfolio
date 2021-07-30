import Link from 'next/link';

export default function Home() {
  return (
    <div className=''>
      <div>あいうえお</div>
      <Link href='./works/aaa'>
        <a>ワークページ</a>
      </Link>
    </div>
  );
}
