import { client } from './client';
import { WorkListResponse, IDListResponse } from './types';

export default async function fetchWorks() {
  const response = await client.get<WorkListResponse>({
    endpoint: 'works',
    queries: {
      limit: 30,
      orders: '-date.numeral',
      fields: 'id,coverImage,title,description,links,tags',
    },
  });

  const works = response.contents;

  return works;
}

export async function fetchWorksOnlyID() {
  const response = await client.get<IDListResponse>({
    endpoint: 'works',
    queries: { fields: 'id', orders: '-date.numeral', limit: 30 },
  });

  const ids = response.contents;

  return ids;
}
