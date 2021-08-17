import { client } from './client';
import { WorkResponse } from './types';

export default async function fetchWorkItem(contentId: string) {
  const response = await client.get<WorkResponse>({
    endpoint: 'works',
    contentId: contentId,
  });

  return response;
}
