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
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
}
