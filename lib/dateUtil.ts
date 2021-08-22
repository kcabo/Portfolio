import dayjs from 'dayjs';
import ja from 'dayjs/locale/ja';

export function toDate(isoString: string): string {
  const date = dayjs(isoString).locale(ja).format('YYYY-MM-DD');
  return date;
}
