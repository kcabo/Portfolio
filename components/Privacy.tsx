import PageTitle from '@/components/PageTitle';

export default function Privacy() {
  return (
    <main
      // ヘッダーとフッター分の高さを引く
      className='container mx-auto min-h-[calc(100vh-150px-320px)] xl:max-w-screen-lg'
    >
      <div className='colored-link bg-white p-10 md:rounded-lg'>
        <PageTitle title='プライバシーポリシー' sub='当サイトではGoogleアナリティクスを使用しています。' />
        <div className='space-y-4 leading-loose'>
          <p>
            サイトの利便性向上及びコンテンツの改善のため、当サイトではGoogleアナリティクスを導入しています。
            Googleアナリティクスはトラフィックデータの収集のためにCookieを使用しておりますが、これらは個人を特定するものではございません。
          </p>
          <p>
            Googleアナリティクスによるデータの収集・処理方法につきましては、
            <a
              href='https://policies.google.com/technologies/partner-sites?hl=ja'
              target='_blank'
              rel='noopener noreferrer'
            >
              こちら
            </a>
            をご参照ください。また多くのブラウザでは、これらのデータ収集をブロックできます。ブラウザに保存された既存のCookieを消去することもできます。
          </p>
          <p>
            この規約に関しての詳細は
            <a
              href='https://marketingplatform.google.com/about/analytics/terms/jp/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Googleアナリティクス利用規約
            </a>
            や
            <a href='https://policies.google.com/privacy?hl=ja' target='_blank' rel='noopener noreferrer'>
              Googleプライバシーポリシー
            </a>
            をご覧ください。
          </p>
        </div>
      </div>
    </main>
  );
}
