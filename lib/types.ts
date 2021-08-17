type ListContentsResponse<T> = {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
};

type ContentResponse<T> = {
  id?: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  revisedAt?: string;
} & T;

export type LogCategory = 'GitHub' | 'Portfolio' | 'Zenn';

// APIからのレスポンスで使用する型
type LogRaw = {
  showOnTop: boolean;
  category: LogCategory[];
  date: string;
  body: string;
};

// コンポーネントが使用する型
export type Log = {
  showOnTop: boolean;
  category: LogCategory;
  date: string;
  body: string;
};

type UpdateResponse = ContentResponse<LogRaw>;

export type UpdateListResponse = ListContentsResponse<UpdateResponse>;
