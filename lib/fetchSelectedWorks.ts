import { client } from './client';
import { SelectedWorksResponse } from './types';

export default async function fetchSelectedWorks() {
  const response = await client.get<SelectedWorksResponse>({
    endpoint: 'selected',
  });

  const selected = response.selectedWorks;

  return selected;
}
