import { client } from '../libs/client';

type LogType = 'GitHub' | 'Portfolio' | 'Zenn';

type updateResponse = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  showOnTop: boolean;
  type: LogType[];
  date: string;
  body: string;
};

type updateListResponse = {
  contents: updateResponse[];
  totalCount: number;
  offset: number;
  limit: number;
};

export default async function fetchUpdates() {
  const data = await client.get<updateListResponse>({
    endpoint: 'updates',
    queries: { orders: '-date' },
  });

  const updates = data.contents.map(({ showOnTop, type, date, body }) => {
    return {
      showOnTop: showOnTop,
      logType: type[0],
      date: date.slice(0, 10),
      body: body,
    };
  });

  return updates;
}
