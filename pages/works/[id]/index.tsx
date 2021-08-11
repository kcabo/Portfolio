import styles from '../../../styles/Work.module.css';

export default function Work() {
  return (
    <div className='bg-white md:rounded-lg'>
      <article
        dangerouslySetInnerHTML={{
          __html: body,
        }}
        className={styles.article}
      />
    </div>
  );
}

const body =
  '<p><img src="https://images.microcms-assets.io/assets/10d70abe32d44216bd12a8d56159666d/53393b768d3d4c8d9bca9d11093bdd00/ERdJv3ZU4AEq-dv.jpg?w=200&amp;h=281" alt="" width="200" height="281"><br></p><h2 id="h252486708e">練習タイムの記録表作成を、スマホだけで</h2><p>私のいた水泳部では、練習時に計測した選手のタイムを毎回Excelにまとめるのがマネージャーの仕事でした。<br>当時抱えていた、入力に手間がかかる・PCが必要になる・複数マネージャーによる共同同時入力が困難といった課題を解決したのがこのLINEのチャットボットであるTiMです。練習タイムをLINEの対話形式でデータベースに記録し、保存されたデータを表形式(CSV)に出力することができます。<br><br><img src="https://images.microcms-assets.io/assets/10d70abe32d44216bd12a8d56159666d/16e570d16b054833af63daebc989bb55/ERdJv3ZU4AA5ZIs.jpg" alt="" width="400" height="514"><br></p><h2 id="hc4d6411acb">工夫点</h2><h3 id="h53c0c2e4fb">CSVはBOM付きUTF-8で出力</h3><p>一般的に使用されるBOMなしUTF-8では、CSVファイルを直接Excelで開いた際にASCII文字以外を正しく認識できません。ExcelはデフォルトでShift-JISとしてファイルを読み込むためです。一方でShift-JIS形式でCSVを出力すると、スマホのメールクライアントで文字化けが発生します。試行錯誤の結果、UTF-8にBOMを付与することでいずれの環境でも文字化けが発生しないことに気づきました。</p><h3 id="h7ff59ed903">インメモリDBでユーザーのステートを保持</h3><p>本来LINEのチャットボットはステートレスです。しかしチャットボット側がユーザーの現在の状態(=編集中の場所など)を各メッセージ受信時に知っておく必要がありました。通常のWebアプリであればセッションで管理をしますが、チャットボットでは同じ方法で実装できません。代わりにインメモリデータベースであるRedisにユーザーの状態を保持しておくことにしました。ユーザーのプロフィール情報などは既にリレーショナルデータベース上で管理してありましたが、状態情報はあえてそれとは切り離しました。状態情報は頻繁に書き換えが発生するため、インメモリデータベースの速度面での恩恵が受けられると考えたためです。</p>';
