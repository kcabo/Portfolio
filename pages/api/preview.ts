import type { NextApiRequest, NextApiResponse } from 'next';
import fetchWorkItem from '@/lib/fetchWorkItem';
import { PreviewWorkQuery } from '@/lib/types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!isValidQuery(req.query)) {
    return res.status(404).end();
  }

  const content = await fetchWorkItem(req.query.id, req.query.draftKey);
  if (!content) return res.status(401).json({ message: 'Invalid slug' });

  res.setPreviewData(
    {
      id: content.id,
      draftKey: req.query.draftKey,
    },
    { maxAge: 60 } // The preview mode cookies expire in 1 minute
  );
  res.redirect(307, `/works/${content.id}`);
}

function isValidQuery(
  query: NextApiRequest['query']
): query is PreviewWorkQuery {
  return typeof query.id === 'string' && typeof query.draftKey === 'string';
}
