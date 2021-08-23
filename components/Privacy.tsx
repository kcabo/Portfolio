import PageTitle from '@/components/PageTitle';

export default function Privacy() {
  return (
    <div className='p-10 bg-white md:rounded-lg'>
      <PageTitle
        title='プライバシーポリシー'
        sub='当サイトではGoogleアナリティクスを使用しています。'
      />
      <p className='leading-loose'>
        サイトの利便性向上及びコンテンツ改善のため、当サイトではGoogleアナリティクスを導入しています。
        Googleアナリティクスはトラフィックデータの収集のためにCookieを使用しておりますが、これらは個人を特定するものではございません。
        Googleアナリティクスがどのようにデータを収集・処理するかにつきましては
        <a
          href='https://policies.google.com/technologies/partner-sites?hl=ja'
          className='text-[#4686da] underline'
        >
          こちら
        </a>
        をご参照ください。また多くのブラウザでは、これらのデータ収集をブロックできます。ブラウザに保存された既存のCookieを消去することもできます。
        この規約に関しての詳細はGoogleアナリティクスサービス利用規約のページやGoogleポリシーと規約ページをご覧ください。
      </p>
    </div>
  );
}
