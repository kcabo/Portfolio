export default function formatRichText(html: string): string {
  const gifWithoutQueryString = html.replace(/\.gif\?w=\d*&amp;h=\d*/g, '.gif');
  return gifWithoutQueryString;
}
