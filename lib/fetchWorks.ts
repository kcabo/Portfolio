import { client } from './client';
import { WorkListResponse } from './types';

export default async function fetchWorks() {
  const response = await client.get<WorkListResponse>({
    endpoint: 'works',
  });

  const works = response.contents;

  return works;
}
