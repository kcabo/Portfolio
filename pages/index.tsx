import { GetStaticProps } from 'next';
import { client } from '../libs/client';
import styles from '../styles/Home.module.css';

type BlogResponse = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  article: string;
};

export default function Home(blog: BlogResponse) {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `${blog.article}`,
      }}
      className={styles.article}
    />
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.get<BlogResponse>({
    endpoint: 'works',
    contentId: '22u8obhjn_p',
  });

  return {
    props: data,
  };
};
