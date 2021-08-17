import { client } from './client';
import { WorkListResponse, IDListResponse } from './types';

export default async function fetchWorks() {
  const response = await client.get<WorkListResponse>({
    endpoint: 'works',
  });

  const works = response.contents;

  return works;
}

export async function fetchWorksOnlyID() {
  const response = await client.get<IDListResponse>({
    endpoint: 'works',
    queries: { fields: 'id', orders: '-date.numeral' },
  });

  const ids = response.contents;

  return ids;
}
