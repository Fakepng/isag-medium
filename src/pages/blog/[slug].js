import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import SyntaxHighlighter from "react-syntax-highlighter";
import Head from "next/head";

import Comment from "@components/Comment";

const components = { SyntaxHighlighter };

const PostPage = ({ frontMatter: { title, date }, mdxSource }) => {
  return (
    <div>
      <Head>
        <title>{title} | ISAG</title>
      </Head>

      <div className="p-6 max-w-[800px] mx-auto">
        <h1 className="text-4xl text-center">{title}</h1>
        <MDXRemote {...mdxSource} components={components} />
        <Comment />
      </div>
    </div>
  );
};

const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("data/posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".mdx", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(
    path.join("data/posts", slug + ".mdx"),
    "utf-8"
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);

  return {
    props: {
      frontMatter,
      slug,
      mdxSource,
    },
  };
};

export { getStaticProps, getStaticPaths };
export default PostPage;
