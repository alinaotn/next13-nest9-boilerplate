import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { FC } from 'react';
import { BlogPost } from 'src/shared/types/blog-post';

type THomeProps = {
    blogPosts: BlogPost[];
};

const Home: FC<THomeProps> = ({ blogPosts = [] }) => {
    return (
        <div>
            <h1>Home</h1>
            {blogPosts.map(({ title, id }) => (
                <div key={id}>
                    <Link href={`/${id}`}>{title}</Link>
                </div>
            ))}
        </div>
    );
};

export const getServerSideProps: (ctx) => Promise<{ props: {} }> = async (
    ctx,
) => {
    return { props: {} };
};

export default Home;
