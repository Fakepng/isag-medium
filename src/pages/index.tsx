import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Giscus from "@giscus/react";
import Card from "../components/Card";

export default function Home({ posts }) {
  return (
    <div>
      {posts.map((post, index) => (
        <div key={index}>
          <Card post={post} />
        </div>
      ))}
    </div>
  );
}

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join("data/posts"));

  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("data/posts", filename),
      "utf-8"
    );

    const { data: frontMatter } = matter(markdownWithMeta);

    return {
      frontMatter,
      slug: filename.split(".")[0],
    };
  });

  return {
    props: {
      posts,
    },
  };
};
