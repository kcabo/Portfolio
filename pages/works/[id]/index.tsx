import styles from '../../../styles/Work.module.css';
import Tag from '../../../components/Tag';
import { OpenGithub, OpenHomepage } from '../../../components/RichLinkButton';
import RelatedWorks from '../../../components/RelatedWorks';

export default function Work() {
  return (
    <div className='grid md:px-8 grid-cols-1 gap-10 lg:grid-cols-[1fr,300px]'>
      <div className='pb-6 bg-white md:rounded-lg'>
        <img
          src='https://images.microcms-assets.io/assets/10d70abe32d44216bd12a8d56159666d/e807c88013ef4d92bda5fef84dcac8d0/textonly.png'
          alt=''
          className='w-full md:rounded-t-lg'
        />
        <div className='relative w-4/5 max-w-md px-5 py-4 -mt-10 text-3xl font-bold text-center text-white break-words bg-gray-900'>
          Excel アニメーション
        </div>
        <div className='px-8 mt-6 mb-10'>
          <div className='mb-3 text-sm text-gray-500'>2019年6月～現在</div>
          <div className='mb-4'>
            部活でタイムを管理するためのLINE
            Bot。対話形式でタイムを入力し、CSVに出力。
          </div>
          <div className='flex flex-wrap gap-3'>
            <Tag />
            <Tag />
            <Tag />
          </div>
        </div>
        <div className='block w-2/3 mx-auto mb-10 lg:hidden min-w-[280px] max-w-[400px]'>
          <OpenHomepage />
          <OpenGithub />
        </div>
        <article
          dangerouslySetInnerHTML={{
            __html: body,
          }}
          className={styles.article}
        />
      </div>
      <div className=''>
        <div className='hidden mb-12 lg:block'>
          <OpenHomepage />
          <OpenGithub />
        </div>
        <div className='px-6 md:p-0'>
          <RelatedWorks />
        </div>
      </div>
    </div>
  );
}

const body =
  '<p><img src="https://images.microcms-assets.io/assets/10d70abe32d44216bd12a8d56159666d/53393b768d3d4c8d9bca9d11093bdd00/ERdJv3ZU4AEq-dv.jpg?w=300&amp;h=421" alt="" width="300" height="421"></p><p><br></p><h2 id="h252486708e">練習タイムの記録表作成を、スマホだけで</h2><p>私のいた水泳部では、練習時に計測した選手のタイムを毎回Excelにまとめるのがマネージャーの仕事でした。</p><p>当時抱えていた、入力に手間がかかる・PCが必要になる・複数マネージャーによる共同同時入力が困難といった課題を解決したのがこのLINEのチャットボットであるTiMです。練習タイムをLINEの対話形式でデータベースに記録し、保存されたデータを表形式(CSV)に出力することができます。</p><p><br></p><p><img src="https://images.microcms-assets.io/assets/10d70abe32d44216bd12a8d56159666d/16e570d16b054833af63daebc989bb55/ERdJv3ZU4AA5ZIs.jpg?w=400&amp;h=267" alt="" width="400" height="267"></p><p><br></p><h2 id="hc4d6411acb">工夫点</h2><h3 id="h53c0c2e4fb">CSVはBOM付きUTF-8で出力</h3><p>一般的に使用されるBOMなしUTF-8では、CSVファイルを直接Excelで開いた際にASCII文字以外を正しく認識できません。ExcelはデフォルトでShift-JISとしてファイルを読み込むためです。一方でShift-JIS形式でCSVを出力すると、スマホのメールクライアントで文字化けが発生します。試行錯誤の結果、UTF-8にBOMを付与することでいずれの環境でも文字化けが発生しないことに気づきました。</p><h3 id="h7ff59ed903">インメモリDBでユーザーのステートを保持</h3><p>本来LINEのチャットボットはステートレスです。しかしチャットボット側がユーザーの現在の状態(=編集中の場所など)を各メッセージ受信時に知っておく必要がありました。通常のWebアプリであればセッションで管理をしますが、チャットボットでは同じ方法で実装できません。代わりにインメモリデータベースであるRedisにユーザーの状態を保持しておくことにしました。ユーザーのプロフィール情報などは既にリレーショナルデータベース上で管理してありましたが、状態情報はあえてそれとは切り離しました。状態情報は頻繁に書き換えが発生するため、インメモリデータベースの速度面での恩恵が受けられると考えたためです。</p>';
