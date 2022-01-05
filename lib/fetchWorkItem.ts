import { client } from './client';
import { WorkResponse } from './types';

// プレビューモード時のみdraftKeyが与えられる
// NOTE: contentIdが間違っていると404が返され、SDKからエラーが放たれる。
// しかしこちらはエラーの種類が分からないため、404エラーを含む全てのエラーを握りつぶしている
export default async function fetchWorkItem(
  contentId: string,
  draftKey?: string
) {
  try {
    const response = await client.get<WorkResponse>({
      endpoint: 'works',
      contentId: contentId,
      queries: { draftKey: draftKey },
    });

    // gif画像にクエリ文字列がついていると静止画になってしまうので、gifはクエリ文字列を取り除く
    const html = formatRichText(response.body);
    response.body = html;

    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
}

function formatRichText(html: string): string {
  const gifWithoutQueryString = html.replace(/\.gif\?w=\d*&amp;h=\d*/g, '.gif');
  return gifWithoutQueryString;
}
