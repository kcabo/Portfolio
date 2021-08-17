type ListContentsResponse<T> = {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
};

type ContentResponse<T> = {
  id: string;
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

type Work = {
  coverImage: CoverImage;
  title: string;
  description: string;
  date: Date;
  links: Links | null;
  tags: string[];
  theme: Theme | null;
  body: string;
  relatedWorks: Work[] | { id: string }[];
};

type CoverImage = {
  url: string;
  height: number;
  width: number;
};

type Date = {
  fieldId: 'date';
  text: string;
  numeral: number;
};

type Links = {
  fieldId: 'links';
  github?: string;
  homepage?: string;
};

type Theme = {
  fieldId: 'theme';
  backgroundColor?: string;
  textColor?: string;
};

export type WorkResponse = ContentResponse<Work>;

export type WorkListResponse = ListContentsResponse<WorkResponse>;